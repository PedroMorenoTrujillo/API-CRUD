export class BarChartOptions {
  private chartOptions: any;
  private data: any;

  constructor(data: any, chartOptions: any) {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        title: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          enabled: false,
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          data: [
            {
              name: 'Chrome',
              y: 63.06,
              drilldown: 'Chrome',
            },
            {
              name: 'Safari',
              y: 19.84,
              drilldown: 'Safari',
            },
            {
              name: 'Firefox',
              y: 4.18,
              drilldown: 'Firefox',
            },
            {
              name: 'Edge',
              y: 4.12,
              drilldown: 'Edge',
            },
            {
              name: 'Opera',
              y: 2.33,
              drilldown: 'Opera',
            },
            {
              name: 'Internet Explorer',
              y: 0.45,
              drilldown: 'Internet Explorer',
            },
            {
              name: 'Other',
              y: 1.582,
              drilldown: null,
            },
          ],
        },
      ],
    };
  }

  get options(): Highcharts.Options {
    return this.chartOptions;
  }
}
