import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class NavbarBack extends Component {
  render() {
    return (
      <nav className="navbar">
        <button onClick={() => useHistory.goBack()} className="navbar-btn">
          <h4>Back</h4>
        </button>
      </nav>
    );
  }
}

export default withAuth(NavbarBack);
