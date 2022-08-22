import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ChipsComponent],
  exports: [ChipsComponent],
  imports: [CommonModule, MatChipsModule, MatIconModule, MatInputModule],
})
export class ChipsModule {}
