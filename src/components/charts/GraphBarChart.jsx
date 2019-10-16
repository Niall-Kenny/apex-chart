import React, { Component } from "react";
import Chart from "react-apexcharts";

class GraphBarChart extends Component {
  state = {
    options: {
      chart: {
        width: "100%",
        height: "100%",
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      series: [
        {
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          data: [53, 32, 33, 52, 13, 44, 32]
        }
      ],
      xaxis: {
        categories: [
          "Korea",
          "Canada",
          "Poland",
          "Italy",
          "France",
          "Japan",
          "China"
        ]
      },
      legend: {
        position: "right",
        verticalAlign: "top",
        containerMargin: {
          left: 35,
          right: 60
        }
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            chart: {
              background: "yellow"
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
  };
  render() {
    return (
      <div className="dsbrd-graph_row2-item">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="bar"
        />
      </div>
    );
  }
}

export default GraphBarChart;
