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
      .then(() => this.props.history.push("/experience")) // causes Router URL change
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1> Experience Details </h1>
        <h2>{this.state.substance.name}</h2>

        {/* poner el resto de detalles de la experiencia */}
        <Link to={"/experience/history"}>
          <button onClick={this.deleteExperienece}>Delete Experience</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(Details);
