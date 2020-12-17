import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";
import ReactStopwatch from "react-stopwatch";


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
              <div>
                <h2>{formatted}</h2>
              </div>
            );
          }}
        />
        <h1>Track Page</h1>
        <h1>Welcome {this.props.user.username}</h1>

        {this.state.notes.map((note) => {
          return (
            <div>
              <p>{note}</p>
            </div>
          );
        })}
        <input type="submit" value="FINISH"></input>
      </div>
    );
  }
}

export default withAuth(Track);
