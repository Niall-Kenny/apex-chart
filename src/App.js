import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Venue from "./pages/venue/Venue";

class App extends Component {
  state = {
    navExtended: false
  };

  toggleMainMargin = bool => {
    this.setState({ navExtended: bool });
  };

  render() {
    const { navExtended } = this.state;
    return (
      <>
        <Navbar toggleMainMargin={this.toggleMainMargin} />
        <div className={navExtended ? "main-navIsExtended" : "main"}>
          <Router>
            <Dashboard path="/" />
            <Venue path="/venue" />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
