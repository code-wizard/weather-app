import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TemperatureService} from '../../../../core/services/temperature.service';
import {RainfallService} from '../../../../core/services/rainfall.service';

@Component({
  selector: 'app-new-rainfall',
  templateUrl: './new-rainfall.component.html',
  styleUrls: ['./new-rainfall.component.css']
})
export class NewRainfallComponent implements OnInit {
  addForm: FormGroup;
  constructor(private rainfallService: RainfallService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      country: new FormControl(null, Validators.required),
      data: new FormControl(null, Validators.required)
    });
  }

  save() {
    const data = this.addForm.value;
    data['data'] = JSON.parse(this.addForm.value.data);
    this.rainfallService.addRainfall(data)
      .subscribe(
        (response) => {
          alert(response);
          this.addForm.reset();
        }
      );
  }
}
