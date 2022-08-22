import * as Highcharts from 'highcharts';

export class ChartComponent {
  chartId: string = '';
  options!: Highcharts.Options;

  protected drawChart() {
    setTimeout(() => {
      Highcharts.chart(this.chartId, this.options);
    }, 0);
  }
}
