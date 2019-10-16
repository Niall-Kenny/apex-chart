import React, { Component } from "react";
import Chart from "react-apexcharts";

class GraphRadial extends Component {
  state = {
    options: {
      colors: ["#20E647"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            background: "#293450"
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15
            }
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: "13px"
            },
            value: {
              color: "#fff",
              fontSize: "30px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#87D4F9"],
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    }
  };

  render() {
    return (
      <div className="dsbrd-graph_row1-item-graph-radial graph-radial">
        <Chart
          type="radialBar"
          series={[this.props.totalPercentage]}
          options={this.state.options}
          height="290"
        ></Chart>
      </div>
    );
  }
}

export default GraphRadial;
