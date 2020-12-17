import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";
import { Link } from "react-router-dom";

class Start extends Component {
  state = {
    substance: {},
    emotionStatus: "",
    moodStatus: "",
    userexperience: "",
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
        const {
          substance,
          emotionStatus,
          moodStatus,
          userexperience,
        } = experience;
        this.setState({ substance, emotionStatus, moodStatus, userexperience });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { id } = this.props.match.params;
    const { substance, emotionStatus, moodStatus, userexperience } = this.state;
    return (
      <div className="siempre">
        <h1>Substance: {substance.name}</h1>

        <div className="user-info">
          <h3>Warnings!!:</h3>

          <p>
            Before starting, if you have not visited it previously, we advise
            you to go to the
          </p>
          <Link to={`/learn`}>
            <h4>Learn Page</h4>
          </Link>
          <h3>
            Analizyng your answers and your personal data, from Safe-Use we
            recommend the following
          </h3>
          <p>you should take this dose:</p>
          <h3>{substance.dose} </h3>
          <p>Never take more than this dose: {substance.maxdose}</p>
          <h3>{substance.maxdose}</h3>
          <h3>Are you sure you want to continue with the experience?</h3>

        <Link to={`/experience/track/${id}`}>
          <button className="input-btn">START</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Start);
