/**
 * Created by ebuka on 07/01/2019.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TemperatureComponent} from './temperature/temperature.component';
import {SideNavComponent} from './side-nav.component';
import {RainfallComponent} from './rainfall/rainfall.component';
const sidenavRoutes = [
  {path: '', component: SideNavComponent, children: [
      {path: '', redirectTo:  'temperature', pathMatch: 'full'},
      {path: 'temperature', component: TemperatureComponent},
      {path: 'rainfall', component: RainfallComponent}
      , ] }
];
@NgModule({
  imports: [
    RouterModule.forChild(sidenavRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SideNavRoutingModule {

}
