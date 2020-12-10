import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class Experience extends Component {
  render() {
    return (
      <div>
        <h1>Experience Page</h1>
        <h1>Welcome {this.props.user.username}</h1>
      </div>
    );
  }
}

export default withAuth(Experience);