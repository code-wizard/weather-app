import { Component, OnInit } from '@angular/core';
import {TemperatureService} from '../../../../core/services/temperature.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-temperature',
  templateUrl: './new-temperature.component.html',
  styleUrls: ['./new-temperature.component.css']
})
export class NewTemperatureComponent implements OnInit {
  addForm: FormGroup;
  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      level: new FormControl('', Validators.required),
      country: new FormControl(null, Validators.required),
      data: new FormControl(null, Validators.required)
    });
  }

  save() {
    const data = this.addForm.value;
    data['data'] = JSON.parse(this.addForm.value.data);
    console.log(data)
    this.temperatureService.addTemp(data)
      .subscribe(
        (response) => {
          alert(response);
          this.addForm.reset();
        }
      );
  }
}
