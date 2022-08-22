import { ModalModule } from './../modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabledataComponent } from './tabledata.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { BarchartModule } from '../charts/barchart/barchart.module';
import { PiechartModule } from '../charts/piechart/piechart.module';
import { ChipsModule } from '../chips/chips.module';
@NgModule({
  declarations: [TabledataComponent],
  exports: [TabledataComponent],
  imports: [
    CommonModule,
    BarchartModule,
    PiechartModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    ModalModule,
    MatButtonModule,
    ChipsModule,
  ],
})
export class TabledataModule {}
