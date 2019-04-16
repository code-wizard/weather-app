import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {MAT_DATE_FORMATS, MatDatepicker, MatDialog, MatDialogRef} from '@angular/material';
import * as _moment from 'moment';
import {Moment} from 'moment';
import {FormControl} from '@angular/forms';
import {barChartOptions, MY_FORMATS} from '../../../globals';
import {TemperatureService} from '../../../core/services/temperature.service';
import {UtilityService} from '../../../core/services/utility.service';
import {NewTemperatureComponent} from './new-temperature/new-temperature.component';
const moment =  _moment;


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})


export class TemperatureComponent implements OnInit {
  startDate;
  endDate;
  country;
  level;
  countries = [
    'England',
    'Wales',
    'Scotland',
    'UK'
  ];
  public chartOptions = barChartOptions;
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  breakpoint;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];

  constructor(private temperatureService: TemperatureService,
              private dialog: MatDialog,
              private utilityService: UtilityService) { }

  ngOnInit() {
    this.startDate = new FormControl(moment());
    this.endDate = new FormControl(moment());
    this.country = new FormControl('England');
    this.level = new FormControl('max');
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;

  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  chosenYearHandler(normalizedYear: Moment, control) {
    const ctrlValue = control.value;
    ctrlValue.year(normalizedYear.year());
    control.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>, control) {
    const ctrlValue = control.value;
    ctrlValue.month(normalizedMonth.month());
    control.setValue(ctrlValue);
    datepicker.close();
  }
  viewReport() {
      // ?sy=1910&ey=1911&em=12&sm=1&country=England
    const q = {
      sy: this.startDate.value.format('YYYY'),
      ey: this.endDate.value.format('YYYY'),
      em: this.endDate.value.format('MM'),
      sm: this.startDate.value.format('MM'),
      country: this.country.value
    };
    const query = this.utilityService.getQueryParams(q);
    if (this.level.value === 'max') {
      this.temperatureService.getMaxTemperature(query)
        .subscribe(
          ( data ) => {
              console.log(data);
              this.barChartLabels = data['label'];
              this.barChartData = data['data_set'];
          }
        );
    } else {
      this.temperatureService.getMinTemperature(query)
        .subscribe(
          ( data ) => {
            this.barChartLabels = data['label'];
            this.barChartData = data['data_set'];
          }
        );
    }
  }

  newData() {
    let dialogRef = this.dialog.open(NewTemperatureComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
