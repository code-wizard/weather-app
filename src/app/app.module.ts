import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {
  MatNativeDateModule
} from '@angular/material';
import {SharedModule} from './shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DomainInterceptor} from './core/interceptors/domain-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatMomentDateModule,
    HttpClientModule,
    // MatNativeDateModule,
    // MomentDateAdapter
],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: DomainInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
