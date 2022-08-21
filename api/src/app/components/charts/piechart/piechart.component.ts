import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartComponent } from '../chartComponent/chartComponent';
import { PieChartOptions } from './piechart.options';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent extends ChartComponent implements OnChanges {
  @Input() override chartId: string = '';
  @Input() data: any;

  constructor() {
    super();
    this.data = [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 70.67,
            sliced: true,
            selected: true,
          },
          {
            name: 'Edge',
            y: 14.77,
          },
          {
            name: 'Firefox',
            y: 4.86,
          },
          {
            name: 'Safari',
            y: 2.63,
          },
          {
            name: 'Internet Explorer',
            y: 1.53,
          },
          {
            name: 'Opera',
            y: 1.4,
          },
          {
            name: 'Sogou Explorer',
            y: 0.84,
          },
          {
            name: 'QQ',
            y: 0.51,
          },
          {
            name: 'Other',
            y: 2.6,
          },
        ],
      },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.options = new PieChartOptions(this.data, '').options;
    this.drawChart();
  }
}
