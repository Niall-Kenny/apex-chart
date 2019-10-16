import React, { Component } from "react";
import "react-vis/dist/style.css";
import GraphBarChart from "../../components/charts/GraphBarChart";
import GraphRadar from "../../components/charts/GraphRadar";
import GraphLineSeries from "../../components/charts/GraphLineSeries";
import GraphBarChartHorizontal from "../../components/charts/GraphBarChart-Horizontal";
import GraphRadial from "../../components/charts/GraphRadial";
import "./dashboard.css";
import "../../components/charts/graphs.css";
class Dashboard extends Component {
  state = {
    statList: {},
    overallScore: 0.67
  };

  componentDidMount() {
    // Promise.all([this.getStats(), this.getOverallScore()]).then(res => {
    //   this.setState({ statList: res[0], overallScore: res[1].overall });
    // });
  }

  render() {
    const { overallScore } = this.state;
    return (
      <>
        <div className="dsbrd-graph_row">
          <GraphLineSeries />
          <GraphRadial totalPercentage={overallScore * 100}></GraphRadial>
        </div>
        <div className="dsbrd-graph_row">
          <GraphBarChart />
          <GraphRadar />
          <GraphBarChartHorizontal></GraphBarChartHorizontal>
        </div>
      </>
    );
  }
}
export default Dashboard;
