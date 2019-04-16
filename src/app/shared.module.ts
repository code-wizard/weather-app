import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    MatDatepickerModule
  ],
  exports: [
    ChartsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  declarations: [
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule { }
