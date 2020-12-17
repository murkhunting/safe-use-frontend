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
          <h4 className="username">{user.weight} kg</h4>
          <h4 className="username">{user.age} yo</h4>
          <h4 className="username">{user.pathologies}</h4>
          <h4 className="username">{user.phoneNumber}</h4>
          <h4 className="username">{user.email}</h4>
          <Link to={"/"}>
          <span onClick={logout} clasName="transparent">
            
            <img
              className="edit-icon"
              alt="profile"
              src="./../images/logout.png"
            />
          </span>
          </Link>
          <Link to={`/profile/edit`}>
            <img
              className="edit-icon"
              alt="profile"
              src="./../images/setting.png"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
