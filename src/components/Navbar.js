import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink to={"/"} className="navbar-btn">
          <h4>Home</h4>
        </NavLink>
        <NavLink to={"/experience/history"} className="navbar-btn">
          <h4>History</h4>
        </NavLink>
        <NavLink to={"/experience"} className="navbar-btn">
          <h4>Experience</h4>
        </NavLink>
        <NavLink to={"/learn"} className="navbar-btn">
          <h4>Learn</h4>
        </NavLink>
        <NavLink to={"/profile"} className="navbar-btn">
          <h4>Profile</h4>
        </NavLink>
      </nav>
    );
  }
}

export default withAuth(Navbar);
