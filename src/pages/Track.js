import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";
import ReactStopwatch from "react-stopwatch";
import { Link } from "react-router-dom";

class Track extends Component {
  state = {
    addedSubstances: [],
    duration: "",
    notes: [],
  };

  componentDidMount() {
    this.getExperience();
  }

  getExperience = () => {
    const { id } = this.props.match.params;
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/experience/start/${id}`)
      .then((apiResponse) => {
        const experience = apiResponse.data;
        const { addedSubstances, duration, notes } = experience;
        this.setState({ addedSubstances, duration, notes });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Tracking Experience</h1>
        <div className="user-info">
          <ReactStopwatch
            seconds={0}
            minutes={0}
            hours={0}
            onChange={({ hours, minutes, seconds }) => {
              // do something
            }}
            onCallback={() => console.log("Finish")}
            render={({ formatted, hours, minutes, seconds }) => {
              return (
                <div className="timer">
                  <h1>{formatted}</h1>
                </div>
              );
            }}
          />

          {this.state.notes.map((note) => {
            return (
              <div>
                <p>{note}</p>
              </div>
            );
          })}

          <h3>How are you feeling?</h3>
          <p>
            If you are having a challenging experience try the emergency call
            and contact with the nearest hospital
          </p>
          <button className="input-btn">EMERGENCY</button>
          <p>
            If you think that you are back into normal state click on the finish
            button to save the experience
          </p>
          <Link to={`/experience/history`}>
            <button className="input-btn">FINISH</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Track);
