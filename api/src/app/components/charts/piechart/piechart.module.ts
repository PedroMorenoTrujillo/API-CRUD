import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiechartComponent } from './piechart.component';



@NgModule({
  declarations: [
    PiechartComponent
  ],
  exports: [
    PiechartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PiechartModule { }
