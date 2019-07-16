import { Component, OnInit, OnDestroy } from "@angular/core";
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  public options: any;
  private chart2: AmChart;
  private timer: any;

  constructor(private AmCharts: AmChartsService) {}

  makeRandomDataProvider() {
    const dataProvider = [];

    // Generate random data
    // for (let year = 1950; year <= 2005; ++year) {
    //   dataProvider.push({
    //     year: "" + year,
    //     value: Math.floor(Math.random() * 100) - 50
    //   });
    // }
    dataProvider.push(
      {
        month: "1986-02",
        value: 33,
        value1: 50
      },
      {
        month: "1986-03",
        value: 20,
        value1: 10
      },
      {
        month: "1986-04",
        value: 24,
        value1: 100
      },
      {
        month: "1986-05",
        value: 42,
        value1: 60
      },
      {
        month: "1986-06",
        value: 27,
        value1: 20
      },
      {
        month: "1986-07",
        value: 20,
        value1: 30
      },
      {
        month: "1986-08",
        value: 7,
        value1: 50
      },
      {
        month: "1986-09",
        value: 95,
        value1: 40
      },
      {
        month: "1986-10",
        value: 28,
        value1: 80
      },
      {
        month: "1986-11",
        value: 82,
        value1: 100
      },
      {
        month: "1986-12",
        value: 83,
        value1: 25
      },
      {
        month: "1987-01",
        value: 61,
        value1: 200
      },
      {
        month: "1987-02",
        value: 75,
        value1: 90
      },
      {
        month: "1987-03",
        value: 73,
        value1: 40
      },
      {
        month: "1987-04",
        value: 63,
        value1: 50
      },
      {
        month: "1987-05",
        value: 75,
        value1: 100
      },
      {
        month: "1987-06",
        value: 7,
        value1: 35
      },
      {
        month: "1987-07",
        value: 19,
        value1: 25
      },
      {
        month: "1987-08",
        value: 69,
        value1: 10
      },
      {
        month: "1987-09",
        value: 90,
        value1: 20
      },
      {
        month: "1987-10",
        value: 91,
        value1: 10
      },
      {
        month: "1987-11",
        value: 4,
        value1: 10
      },
      {
        month: "1987-12",
        value: 76,
        value1: 104
      },
      {
        month: "1988-01",
        value: 6,
        value1: 109
      },
      {
        month: "1988-02",
        value: 75,
        value1: 200
      },
      {
        month: "1988-03",
        value: 56,
        value1: 79
      },
      {
        month: "1988-04",
        value: 86,
        value1: 90
      },
      {
        month: "1988-05",
        value: 18,
        value1: 35
      },
      {
        month: "1988-06",
        value: 93,
        value1: 30
      },
      {
        month: "1988-07",
        value: 72,
        value1: 120
      },
      {
        month: "1988-08",
        value: 32,
        value1: 130
      },
      {
        month: "1988-09",
        value: 1,
        value1: 312
      },
      {
        month: "1988-10",
        value: 45,
        value1: 30
      },
      {
        month: "1988-11",
        value: 40,
        value1: 65
      },
      {
        month: "1988-12",
        value: 14,
        value1: 30
      },
      {
        month: "1989-01",
        value: 6,
        value1: 109
      },
      {
        month: "1989-02",
        value: 75,
        value1: 204
      },
      {
        month: "1989-03",
        value: 56,
        value1: 179
      },
      {
        month: "1989-04",
        value: 86,
        value1: 190
      },
      {
        month: "1989-05",
        value: 18,
        value1: 350
      },
      {
        month: "1989-06",
        value: 93,
        value1: 130
      },
      {
        month: "1989-07",
        value: 72,
        value1: 200
      },
      {
        month: "1989-08",
        value: 32,
        value1: 130
      },
      {
        month: "1989-09",
        value: 1,
        value1: 31
      },
      {
        month: "1989-10",
        value: 45,
        value1: 70
      },
      {
        month: "1989-11",
        value: 40,
        value1: 105
      },
      {
        month: "1989-12",
        value: 14,
        value1: 40
      },

      {
        month: "1990-01",
        value: 6,
        value1: 109
      },
      {
        month: "1990-02",
        value: 75,
        value1: 204
      },
      {
        month: "1990-03",
        value: 56,
        value1: 179
      },
      {
        month: "1990-04",
        value: 86,
        value1: 190
      },
      {
        month: "1990-05",
        value: 18,
        value1: 350
      },
      {
        month: "1990-06",
        value: 93,
        value1: 130
      },
      {
        month: "1990-07",
        value: 72,
        value1: 200
      },
      {
        month: "1990-08",
        value: 32,
        value1: 130
      },
      {
        month: "1990-09",
        value: 1,
        value1: 31
      },
      {
        month: "1990-10",
        value: 45,
        value1: 70
      },
      {
        month: "1990-11",
        value: 40,
        value1: 105
      },
      {
        month: "1990-12",
        value: 14,
        value1: 40
      }
    );

    return dataProvider;
  }

  makeOptions(dataProvider) {
    return {
      type: "serial",
      theme: "light",
      dataDateFormat: "YYYY-MM",
      marginTop: 0,
      marginRight: 80,
      dataProvider: dataProvider,
      valueAxes: [
        {
          id: "v1",
          position: "left"
        }
      ],
      graphs: [
        {
          id: "g1",
          balloonText:
            "<div style='font-size:14px; color:#333;'><strong><span style='color:#e2161a'>Fund Range</span> [[value]]</strong></div>",
          bullet: "round",
          bulletBorderAlpha: 1,
          bulletColor: "#FFFFFF",
          bulletSize: 5,
          hideBulletsCount: 50,
          lineThickness: 2,
          useLineColorForBulletBorder: true,
          valueField: "value"
        },
        {
          id: "g2",
          bullet: "round",
          balloonText:
            "<div style='font-size:14px; color:#333;'><strong><span style='color:#e2161a'>Bench Mark</span> [[value]]</strong></div>",
          bulletBorderAlpha: 1,
          bulletColor: "red",
          bulletSize: 5,
          hideBulletsCount: 50,
          lineThickness: 2,
          useLineColorForBulletBorder: true,
          valueField: "value1"
        }
      ],

      chartCursor: {
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 1,
        cursorColor: "#258cbb",
        valueLineAlpha: 0.2,
        categoryBalloonDateFormat: "YYYY-MM"
      },
      categoryField: "month",
      // dataDateFormat: "YYYY",
      // categoryField: "year",
      categoryAxis: {
        minPeriod: "MM",
        parseDates: true,
        minorGridAlpha: 0.1,
        minorGridEnabled: true
      },
      export: {
        enabled: true
      }
    };
  }

  ngOnInit() {
    // Create chartdiv1
    this.options = this.makeOptions(this.makeRandomDataProvider());

    // Create chartdiv2
    this.chart2 = this.AmCharts.makeChart(
      "chartdiv2",
      this.makeOptions(this.makeRandomDataProvider())
    );

    this.timer = setInterval(() => {
      // Update chartdiv1
      this.options = this.makeOptions(this.makeRandomDataProvider());

      // Update chartdiv2
      this.AmCharts.updateChart(this.chart2, () => {
        this.chart2.dataProvider = this.makeRandomDataProvider();
      });
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);

    // Cleanup chartdiv2
    if (this.chart2) {
      this.AmCharts.destroyChart(this.chart2);
    }
  }
}
