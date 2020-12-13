import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";
// import { Link } from "react-router-dom";

class ExpDetails extends Component {
  state = {
    substance: "",
    addedsubstances: [],
    duration: "",
    emotionStatus: "",
    moodStatus: "",
    eatStatus: "",
    intention: "",
    userexperience: "",
    notes: [],
    voiceNotes: [],
  };

  componentDidMount() {
    this.getExperience();
  }

  getExperience = () => {
    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:5000/api/experience/${id}`)
      .then((apiResponse) => {
        const experience = apiResponse.data;
        const {
          substance,
          addedsubstances,
          duration,
          emotionStatus,
          moodStatus,
          eatStatus,
          intention,
          userexperience,
          notes,
          voiceNotes,
        } = experience;
        this.setState({
          substance,
          addedsubstances,
          duration,
          emotionStatus,
          moodStatus,
          eatStatus,
          intention,
          userexperience,
          notes,
          voiceNotes,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1> Experience Details </h1>
        <h2>{this.state.substance}</h2>
        <h2>{this.state.date}</h2>
      </div>
    );
  }
}

export default withAuth(ExpDetails);
