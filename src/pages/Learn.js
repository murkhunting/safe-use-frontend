import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import { Link } from "react-router-dom";
import axios from "axios";

class Learn extends Component {
  state = {
    listOfSubstances: [],
  };

  componentDidMount() {
    axios.get(`http:/localhost:5000/api/learn`).then((apiResponse) => {
      this.setState({ listOfSubstances: apiResponse.data });
    });
  }

  render() {
    const { listOfSubstances } = this.state;

    return (
      <div>
        <h1>Learn about the Substances</h1>
        <div>
          {listOfSubstances.map((substance) => (
            <div key={substance._id} className="substance">
              <Link to={`/learn/${substance._id}`}>
                <h3>{substance.name}</h3>
                <h4>{substance.type}</h4>
                <p>{substance.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withAuth(Learn);
