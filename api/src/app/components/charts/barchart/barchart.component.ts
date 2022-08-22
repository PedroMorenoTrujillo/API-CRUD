import { ChartComponent } from './../chartComponent/chartComponent';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BarChartOptions } from './barchart.options';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent extends ChartComponent implements OnChanges {
  @Input() override chartId: string= '';
  @Input() data: any;

  constructor() {
    super()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.options = new BarChartOptions(this.data, '').options;
    this.drawChart();
  }
}
