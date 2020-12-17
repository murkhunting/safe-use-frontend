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
      <div>
        <h2>Selected substance: {substance.name}</h2>
        <h3>Warnings!!:</h3>
        
        <h3>
          After having analyzed your answers and your personal data, from
          Safe-Use we recommend the following:
        </h3>
        <h3>Never take more than this dose:</h3>
        <p>
          Before starting, if you have not visited it previously, we advise you
          to go to the
        </p>
        <Link to={`/learn`}>Learn Page</Link>
        <br />
        <br />
        <Link to={`/experience/track/${id}`}>START</Link>
      </div>
    );
  }
}

export default withAuth(Start);
