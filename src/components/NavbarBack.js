import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class NavbarBack extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to={"/"} className="navbar-btn">
          <h4>Back</h4>
        </Link>
        
      </nav>
    );
  }
}

export default withAuth(NavbarBack);
