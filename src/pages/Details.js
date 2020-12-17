import React, { Component } from "react";
import { withAuth } from "../lib/Auth";
import axios from "axios";
import { Link } from "react-router-dom";

class Details extends Component {
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
      .get(`${process.env.REACT_APP_API_URL}/api/experience/${id}`)
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

  deleteExperienece = () => {
    // <== CREATE METHOD
    const { id } = this.props.match.params;

    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/experience/${id}`)
      .then(() => this.props.history.push("/history")) // causes Router URL change
      .catch((err) => console.log(err));
  };

  render() {
    const {
      substance,
      emotionStatus,
      moodStatus,
      eatStatus,
      intention,
      userexperience,
    } = this.state;
    return (
      <div className="siempre">
        <h1> Experience Details </h1>
        <div className="user-info">
          <h4>Substance: {substance.name}</h4>
          <h4>I was feeling: {emotionStatus} than usual</h4>
          <h4>My mood was: {moodStatus}</h4>
          <h4>I had my belly: {eatStatus}</h4>
          <h4>My intention was: {intention}</h4>
          <h4>My frequency using was: {userexperience}</h4>
          <button onClick={this.deleteExperienece}>Delete Experience</button>
        </div>
      </div>
    );
  }
}

export default withAuth(Details);
