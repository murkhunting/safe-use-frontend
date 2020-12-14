import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";

class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <h1>Welcome {this.props.user.username}</h1>
        <Link to={"/experience/history"}>
          <button onClick={this.deleteExperienece}>Delete Account</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(ProfileEdit);
