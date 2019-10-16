import React, { Component } from "react";
import Chart from "react-apexcharts";

class GraphLineSeries extends Component {
  state = {
    options: {
      chart: {
        background: "white"
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Ap's & Radio's Down",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7"
      },
      markers: {
        size: 6
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
      },
      yaxis: {
        tickAmount: 4,
        title: {
          text: "Temperature"
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    },
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13]
      }
    ],
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            background: "yellow"
          }
        }
      }
    ]
  };

  render() {
    return (
      <div className="dsbrd-graph_row1-item-lineSeries">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="85%"
        />
      </div>
    );
  }
}

export default GraphLineSeries;
