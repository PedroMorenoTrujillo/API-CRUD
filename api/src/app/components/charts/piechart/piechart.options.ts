export class PieChartOptions {
  private chartOptions: any;
  private data: any;

  constructor(data: any, chartOptions: any) {
    this.chartOptions = {
      chart: {
        type: 'pie',
      },
      title: {
        text: '',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          data: [
            {
              name: 'Chrome',
              y: 70.67,
              sliced: false,
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
      ],
    };
  }

  get options(): Highcharts.Options {
    return this.chartOptions;
  }
}
