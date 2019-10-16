import React, { Component } from "react";
import "./navbar.css";
import { Link } from "@reach/router";
import {
  FaStore,
  FaExclamation,
  FaRss,
  FaServer,
  FaDatabase,
  FaAddressCard
} from "react-icons/fa";

class Navbar extends Component {
  state = {
    navExtended: false
  };

  toggleNavBar = () => {
    this.setState(prevState => {
      this.props.toggleMainMargin(!prevState.navExtended);
      return { navExtended: !prevState.navExtended };
    });
  };

  render() {
    const { navExtended } = this.state;
    return (
      <>
        <div
          onMouseEnter={() => this.toggleNavBar()}
          onMouseLeave={() => this.toggleNavBar()}
          className={navExtended ? "nav-colour_bar-extended" : "navbar"}
        >
          <Link to="/" className="nav-item">
            <FaServer className="nav-icon" />
            <span className="nav-text">controller</span>
          </Link>
          <Link to="/customer" className="nav-item">
            <FaAddressCard className="nav-icon" />
            <span className="nav-text">customer</span>
          </Link>
          <Link to="/venue" className="nav-item">
            <FaStore className="nav-icon" />
            <span className="nav-text">Venue</span>
          </Link>
          <Link to="/" className="nav-item">
            <FaDatabase className="nav-icon" />
            <span className="nav-text">AP</span>
          </Link>
          <Link to="/" className="nav-item">
            <FaRss className="nav-icon" />
            <span className="nav-text">radio</span>
          </Link>
          <Link to="/" className="nav-item">
            <FaExclamation className="nav-icon" />
            <span className="nav-text">Alert</span>
          </Link>
        </div>
      </>
    );
  }
}

export default Navbar;
