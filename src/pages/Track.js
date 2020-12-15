import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
// import axios from "axios";
import { Link } from "react-router-dom";

class Track extends Component {
  render() {
    return (
      <div>
        <h1>Track Page</h1>
        <h1>Welcome {this.props.user.username}</h1>
        <Link to={`/experience/history`}>
          <input type="submit" value="FINISH"></input>
        </Link>
      </div>
    );
  }
}

export default withAuth(Track);
