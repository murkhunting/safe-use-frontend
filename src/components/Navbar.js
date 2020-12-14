import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink to={"/"} className="navbar-btn">
          <p>Home</p>
        </NavLink>
        <NavLink to={"/experience/history"} className="navbar-btn">
          <p>History</p>
        </NavLink>
        <NavLink to={"/experience"} className="navbar-btn">
          <p>Experience</p>
        </NavLink>
        <NavLink to={"/learn"} className="navbar-btn">
          <p>Learn</p>
        </NavLink>
        <NavLink to={"/profile"} className="navbar-btn">
          <p>Profile</p>
        </NavLink>
      </nav>
    );
  }
}

export default withAuth(Navbar);
