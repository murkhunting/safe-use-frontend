import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
// import axios from "axios";
import { Link } from "react-router-dom";

class Start extends Component {
    render() {
      return (
        <div>
          <h1>Start Page</h1>
          <h1>Welcome {this.props.user.username}</h1>
          <br />
          <br />
          <Link to={`/experience/track`}>
            <input type="submit" value="START"></input>
          </Link>
        </div>
      );
    }
  }
  
  export default withAuth(Start);