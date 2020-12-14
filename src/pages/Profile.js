import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const { user, logout } = this.props;
    console.log("user", user);
    return (
      <div>
        <h1>Profile</h1>
        <h1>{user.username}</h1>

        <div className="user-info">
          <h2 className="username">{user.email}</h2>
          <h2 className="username">{user.phoneNumber}</h2>
          <Link to={`/profile/edit`}>
            <button className="profile-edit-btn">Edit</button>
          </Link>
          <Link to={"/"}>
            <button onClick={logout}>Log Out</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
