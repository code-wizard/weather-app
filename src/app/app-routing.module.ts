/**
 * Created by ebuka on 01/10/2018.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './pages/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login'}},
  { path: 'dashboard', loadChildren: './pages/side-nav/side-nav.module#SideNavModule' },

];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
