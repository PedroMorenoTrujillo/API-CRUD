import { ModalModule } from './../modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabledataComponent } from './tabledata.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [TabledataComponent],
  exports: [TabledataComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    ModalModule,
    MatButtonModule,
  ],
})
export class TabledataModule {}
