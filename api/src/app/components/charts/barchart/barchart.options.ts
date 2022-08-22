export class BarChartOptions {
  private chartOptions: any;

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
          data: data
        },
      ],
    };
  }

  get options(): Highcharts.Options {
    return this.chartOptions;
  }
}
