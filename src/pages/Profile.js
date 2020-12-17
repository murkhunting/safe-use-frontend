import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const { user, logout } = this.props;
    console.log("user", user);
    return (
      <div className="siempre">
        <h1>Safe User {user.username}</h1>

        <div className="user-info">
          <h3 className="username">{user.weight} kg</h3>
          <h3 className="username">{user.age} yo</h3>
          <h3 className="username">{user.pathologies}</h3>
          <h3 className="username">{user.phoneNumber}</h3>
          <h3 className="username">{user.email}</h3>
          <Link to={`/profile/edit`}>
            <img
              className="edit-icon"
              alt="profile"
              src="./../images/setting.png"
            />
          </Link>
        </div>
          <Link to={"/"}>
            <img
              className="edit-icon"
              alt="profile"
              src="./../images/logout.png"
            />
          </Link>
      </div>
    );
  }
}

export default withAuth(Profile);
