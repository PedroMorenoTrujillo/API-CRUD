import { ChartComponent } from './../chartComponent/chartComponent';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
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
    this.data = [
      {
          name: "Browsers",
          data: [
              {
                  name: "Chrome",
                  y: 63.06,

              },
              {
                  name: "Safari",
                  y: 19.84,

              },
              {
                  name: "Firefox",
                  y: 4.18,

              },
              {
                  name: "Edge",
                  y: 4.12,

              },
              {
                  name: "Opera",
                  y: 2.33,

              },
              {
                  name: "Internet Explorer",
                  y: 0.45,

              },
              {
                  name: "Other",
                  y: 1.582,

              }
          ]
      }
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.options = new BarChartOptions(this.data, '').options;
    this.drawChart();
  }



}
