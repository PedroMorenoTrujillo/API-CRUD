export class PieChartOptions {
  private chartOptions: any;

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
          data: data
        },
      ],
    };
  }

  get options(): Highcharts.Options {
    return this.chartOptions;
  }
}
