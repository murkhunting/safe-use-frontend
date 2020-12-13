import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to={"/"} id="home-btn">
          <h4>Home</h4>
        </Link>
        <Link to={"/experience/history"} id="home-btn">
          <h4>History</h4>
        </Link>
        <Link to={"/experience"} id="home-btn">
          <h4>Experience</h4>
        </Link>
        <Link to={"/learn"} id="home-btn">
          <h4>Learn</h4>
        </Link>
        <Link to={"/profile"} id="home-btn">
          <h4>Profile</h4>
        </Link>
      </nav>
    );
  }
}

export default withAuth(Navbar);
