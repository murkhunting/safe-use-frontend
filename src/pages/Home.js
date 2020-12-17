import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="siempre">
        <img
          className="home-logo"
          alt="experience"
          src="../images/Safeuse.png"
        />

        {isLoggedIn ? (
          <>
            <h3>Life can be toxic enough</h3>
            <h3>Mind your health</h3>
            <h5>
              The mission of Safe-Use is to provide education to PREVENT DRUGS
              ABUSE. As well as SAFETY and a quick access to INFORMATION and
              SUPPORT for people having a challenging experience.
            </h5>
          </>
        ) : (
          <>
            <h3>Life can be toxic enough</h3>
            <h3>Mind your health</h3>
            <Link to="/login">
              <button className="input-btn">LOGIN</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="input-btn">SIGN UP</button>
            </Link>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Home);
