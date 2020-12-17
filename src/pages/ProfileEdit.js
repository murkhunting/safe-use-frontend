import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/Auth";

class ProfileEdit extends Component {
  state = {
    username: this.props.user.username,
    email: this.props.user.email,
    phoneNumber: this.props.user.phoneNumber,
    weight: this.props.user.weight,
    age: this.props.user.age,
    pathologies: "",
  };

  handleFormSubmit = (event) => {
    const {
      username,
      email,
      phoneNumber,
      weight,
      age,
      pathologies,
    } = this.state;

    event.preventDefault();

    axios
      .post(
        "http://localhost:5000/api/profile/edit",
        {
          username,
          email,
          phoneNumber,
          weight,
          age,
          pathologies,
          user: this.props.user._id,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push("/profile");
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  deleteUser = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URI}/api/profile/edit`)
      .then(() => this.props.history.push("/")) // causes Router URL change
      .catch((err) => console.log(err));
  };

  render() {
    const { username, email, phoneNumber, weight, age } = this.state;

    return (
      <div className="siempre">
        <h1>Edit Profile</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="hello"
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Phone Number:</label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          />
          <label>Weight:</label>
          <input
            type="weight"
            name="weight"
            value={weight}
            onChange={this.handleChange}
          />
          <label>Age:</label>
          <input
            type="age"
            name="age"
            value={age}
            onChange={this.handleChange}
          />

          <label>Pathogies:</label>
          <select name="pathologies" onChange={this.handleChange}>
            <option value="None">None</option>
            <option value="None">None</option>
            <option value="None">None</option>
          </select>

          <button type="submit"> Save Changes</button>
        <button onClick={this.deleteUser}>Delete Account</button>
        </form>
      </div>
    );
  }
}

export default withAuth(ProfileEdit);
