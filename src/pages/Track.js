import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";
import { Link } from "react-router-dom";

class Track extends Component {
  state = {
    addedSubstances: [],
    duration: "",
    notes: "",
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
          addedSubstances,
          duration,
          notes,      
        } = experience;
        this.setState({ addedSubstances, duration, notes});
      })
      .catch((err) => console.log(err));
  };


  render() {
    return (
      <div>
        <h1>Track Page</h1>
        <h1>Welcome {this.props.user.username}</h1>
        <Link to={`/experience/history`}>
          <input type="submit" value="FINISH"></input>
        </Link>
      </div>
    );
  }
}

export default withAuth(Track);
