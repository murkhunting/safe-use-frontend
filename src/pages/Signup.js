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
    pathologies: "",
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

  render() {
    const { username, password, email, phoneNumber, weight, age } = this.state;
    return (
      <div className="siempre">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Choose your Username"
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="******"
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={this.handleChange}
          />
          <label>Phone Number:</label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Enter your phone number"
            onChange={this.handleChange}
          />
          <label>Weight:</label>
          <input
            type="weight"
            name="weight"
            value={weight}
            placeholder="Enter your weight"
            onChange={this.handleChange}
          />
          <label>Age:</label>
          <input
            type="age"
            name="age"
            value={age}
            onChange={this.handleChange}
            placeholder="Enter your age"
          />
          <label>Pathogies:</label>
          <select name="pathologies" onChange={this.handleChange}>
            <option value="None">None</option>
            <option value="None">None</option>
            <option value="None">None</option>
          </select>

          <button type="submit">SIGN UP</button>
        </form>

        <p>Already have an account?</p>
        <Link to={"/login"}>
          <h4>Login</h4>
        </Link>
      </div>
    );
  }
}

export default withAuth(Signup);
