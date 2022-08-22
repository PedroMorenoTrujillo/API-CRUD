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
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.options = new PieChartOptions(this.data, '').options;
    this.drawChart();
  }
}
