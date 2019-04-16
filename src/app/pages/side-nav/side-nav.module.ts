import {NgModule} from '@angular/core';
import {SideNavRoutingModule} from './side-nav-routing.module';
import {CommonModule} from '@angular/common';
import {TemperatureComponent} from './temperature/temperature.component';
import {SideNavComponent} from './side-nav.component';
import {SharedModule} from '../../shared.module';
import {RainfallComponent} from './rainfall/rainfall.component';
import { NewRainfallComponent } from './rainfall/new-rainfall/new-rainfall.component';
import { NewTemperatureComponent } from './temperature/new-temperature/new-temperature.component';

@NgModule({
  entryComponents: [
    NewRainfallComponent,
    NewTemperatureComponent
  ],
  imports: [
    CommonModule,
    SideNavRoutingModule,
    SharedModule,

  ],
  declarations: [
    TemperatureComponent,
    SideNavComponent,
    RainfallComponent,
    NewRainfallComponent,
    NewTemperatureComponent
  ]
})
export class SideNavModule { }
//
