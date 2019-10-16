import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./graphs.css";

class GraphBarChartHorizontal extends Component {
  state = {
    options: {
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      chart: {
        background: "white"
      },
      yaxis: {
        labels: {
          show: true,
          align: "right"
        },
        title: {
          text: "",
          margin: 0,
          offsetY: 0
        }
      },
      xaxis: {
        categories: [1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

  render() {
    return (
      <div className="dsbrd-graph_row2-item horizontalBar">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
        />
      </div>
    );
  }
}

export default GraphBarChartHorizontal;
