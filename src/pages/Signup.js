import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    phoneNumber: undefined,
    weight: undefined,
    age: undefined,
    pathologies: [],
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      password,
      email,
      phoneNumber,
      weight,
      age,
      pathologies,
    } = this.state;

    this.props.signup(
      username,
      password,
      email,
      phoneNumber,
      weight,
      age,
      pathologies
    );
    this.setState({
      username: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
        <h1>Sign Up</h1>

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
          <input
            type="pathologies"
            name="pathologies"
            value={pathologies}
            onChange={this.handleChange}
          />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have an account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
