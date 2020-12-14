import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";


class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <h1>ProfileEdit Page</h1>
        <h1>Welcome {this.props.user.username}</h1>
      </div>
    );
  }
}

export default withAuth(ProfileEdit);
