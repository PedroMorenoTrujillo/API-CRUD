import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabledataComponent } from './tabledata.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TabledataComponent],
  exports: [TabledataComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class TabledataModule {}
