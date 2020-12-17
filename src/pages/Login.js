import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    // const [error] = useState("");

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
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

          <button type="submit">LOGIN</button>
          <p>if you don't have an account yet</p>
          <Link to={"/signup"}>
            <h4>Sign up</h4>
          </Link>
          {/* <div>
            {error.includes("401") ? (
              <p style={{ color: "#ba905a" }}>
              Wrong password, try again!</p>
            ) : null}
            {error.includes("404") ? (
              <p style={{ color: "#ba905a" }}>
                Seems that this email doesn't exist!
              </p>
            ) : null}
          </div> */}
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
