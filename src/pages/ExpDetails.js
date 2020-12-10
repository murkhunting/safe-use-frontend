import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class ExpDetails extends Component {
  render() {
    return (
      <div>
        <h1>ExpDetails Page</h1>
        <h1>Welcome {this.props.user.username}</h1>
      </div>
    );
  }
}

export default withAuth(ExpDetails);