import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink
          to={"/"}
          className="navbar-btn"
          activeClassName="navbar-selected"
          exact
        >
          <img className="navbar-icon" alt="home" src="./../images/home.png" />
          <p className="nav-text">Home</p>
        </NavLink>
        <NavLink
          to={"/experience/history"}
          className="navbar-btn"
          activeClassName="navbar-selected"
          exact
        >
          <img
            className="navbar-icon"
            alt="history"
            src="../images/history.png"
          />

          <p className="nav-text">History</p>
        </NavLink>
        <NavLink
          to={"/experience"}
          className="navbar-btn"
          activeClassName="navbar-selected"
          exact
        >
          <img
            className="navbar-mainicon"
            alt="experience"
            src="../images/experience.png"
          />
        </NavLink>
        <NavLink
          to={"/learn"}
          className="navbar-btn"
          activeClassName="navbar-selected"
          exact
        >
          <img
            className="navbar-icon"
            alt="learn"
            src="./../images/learn.png"
          />
          <p className="nav-text">Learn</p>
        </NavLink>
        <NavLink
          to={"/profile"}
          className="navbar-btn"
          activeClassName="navbar-selected"
          exact
        >
          <img
            className="navbar-icon"
            alt="profile"
            src="./../images/profile.png"
          />
          <p className="nav-text">Profile</p>
        </NavLink>
      </nav>
    );
  }
}

export default withAuth(Navbar);
