import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Output() selectedFiltersForEmit = new EventEmitter<string[]>();
  selectedFilters: string[] = [];
  addOnBlur = true;

  constructor() {}

  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    if (event.value.trim() !== '') {
      this.selectedFilters.push(event.value.trim().toLocaleLowerCase());
      event.chipInput!.clear();
      this.selectedFiltersForEmit.emit(this.selectedFilters);
    } else {
      return;
    }
  }

  remove(filter: any): void {
    const index = this.selectedFilters.indexOf(filter);
    if (index >= 0) {
      this.selectedFilters.splice(index, 1);
      this.selectedFiltersForEmit.emit(this.selectedFilters);
    }
  }
}