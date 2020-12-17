import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import { Link } from "react-router-dom";
import axios from "axios";

class Learn extends Component {
  state = {
    listOfSubstances: [],
  };

  componentDidMount() {
    this.getAllSubstances();
  }

  getAllSubstances = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/learn`, {
        withCredentials: true,
      })
      .then((apiResponse) => {
        console.log("apiResponse", apiResponse);
        this.setState({ listOfSubstances: apiResponse.data });
      });
  };

  render() {
    const { listOfSubstances } = this.state;

    return (
      <div className="siempre">
        <h1>Learn</h1>
        <div>
          {listOfSubstances.map((substance) => (
            <div key={substance._id} className="substance-box">
              <Link className="substance" to={`/learn/${substance._id}`}>
                <div className="card">
                  <img
                    className="substance-img"
                    alt="profile"
                    src={substance.img}
                  />
                  <h3>{substance.name}</h3>
                  <h4>Type: {substance.type}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withAuth(Learn);
