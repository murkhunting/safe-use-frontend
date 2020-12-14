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
      .get(`http://localhost:5000/api/learn/${id}`)
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
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.type}</h1>
        <h4>{this.state.description}</h4>
        <p>{this.state.information}</p>
      </div>
    );
  }
}

export default withAuth(Substance);
