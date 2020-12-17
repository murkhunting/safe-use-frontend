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
      .get(`${process.env.REACT_APP_API_URL}/api/experience/history`)
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
                <div className="card">
                  <h3>{experience.substance && experience.substance.name} - 17/12/2020</h3>
                  <img
                    className="history-img"
                    alt="profile"
                    src={experience.substance.img}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withAuth(History);
