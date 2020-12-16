import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import ReactStopwatch from "react-stopwatch";

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>

        <ReactStopwatch
          seconds={0}
          minutes={0}
          hours={0}
          onChange={({ hours, minutes, seconds }) => {
            // do something
          }}
          onCallback={() => console.log("Finish")}
          render={({ formatted, hours, minutes, seconds }) => {
            return (
              <div>
                <h2>{formatted}</h2>
               
              </div>
            );
          }}
        />

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
