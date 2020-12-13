import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Home extends Component() {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <h1>Safe-Use</h1>
        {isLoggedIn ? (
          <>
            <h3>Are you ready?</h3>
          </>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              {" "}
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Home);
