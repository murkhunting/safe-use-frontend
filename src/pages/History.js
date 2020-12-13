import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import { Link } from "react-router-dom";
import axios from "axios";

class History extends Component {
  state = {
    listOfExperiences: [],
  };

  componentDidMount() {
    axios
      .get(`http:/localhost:5000/api/experience/history`)
      .then((apiResponse) => {
        this.setState({ listOfExperiences: apiResponse.data });
      });
  }

  render() {
    const { listOfExperiences } = this.state;

    return (
      <div>
        <h1>Experiences History</h1>
        <div>
          {listOfExperiences.map((experience) => (
            <div key={experience._id} className="experience">
              <Link to={`/experience/${experience._id}`}>
                <h3>{experience.substances[0]}</h3>
                <h4>{experience.date}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withAuth(History);