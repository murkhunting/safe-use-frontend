import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";

class Substance extends Component {
  state = {
    name: "",
    type: "",
    description: "",
    information: "",
  };

  componentDidMount() {
    this.getSubstancece();
  }

  getSubstancece = () => {
    const { id } = this.props.match.params;
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/learn/${id}`)
      .then((apiResponse) => {
        const substance = apiResponse.data;
        const { name, type, description, information } = substance;
        this.setState({ name, type, description, information });
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log("props ------- ", this.props)
    return (
      <div className="siempre">
        <h1>{this.state.name}</h1>
        <div className="substance-card">
        <h4>{this.state.description}</h4>
        <p>{this.state.information}</p>
        <p>{this.state.information}</p>

        </div>
      </div>
    );
  }
}

export default withAuth(Substance);
