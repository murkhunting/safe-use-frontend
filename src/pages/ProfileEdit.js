import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";

class ProfileEdit extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    phoneNumber: undefined,
    weight: undefined,
    age: undefined,
    pathologies: "",
  };

  handleFormSubmit = (event) => {
    const {
      username,
      password,
      email,
      phoneNumber,
      weight,
      age,
      pathologies,
    } = this.state;

    event.preventDefault();

    axios
      .put(
        "http://localhost:5000/api/profile/edit",
        {
          username,
          password,
          email,
          phoneNumber,
          weight,
          age,
          pathologies,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push("/profile");
      });
    this.setState({
      username: "",
      password: "",
      email: "",
      phoneNumber: undefined,
      weight: undefined,
      age: undefined,
      pathologies: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  deleteUser = () => {
    axios
      .delete("http://localhost:5000/api/profile/edit")
      .then(() => this.props.history.push("/")) // causes Router URL change
      .catch((err) => console.log(err));
  };

  render() {
    const {
      username,
      password,
      email,
      phoneNumber,
      weight,
      age,
      pathologies,
    } = this.state;

    return (
      <div>
        <h1>Edit Profile</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
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
          <select value={pathologies} onChange={this.handleChange}>
            <option value="None">None</option>
            <option value="Normal">I am Normal</option>
            <option value="Full">I am Full</option>
          </select>

          <input type="submit" value="Save Changes" />
        </form>
        <Link to={"/"}>
          <button onClick={this.deleteUser}>Delete Account</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(ProfileEdit);
