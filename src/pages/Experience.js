import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";

class Experience extends Component {
  state = {
    emotionStatus: "",
    moodStatus: "",
    intention: "",
    userexperience: "",
    eatStatus: "",
    substance: "",
    listOfSubstances: [],
  };

  //Get de toda la lista de substancias
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/experience`)
      .then((apiResponse) => {
        this.setState({ listOfSubstances: apiResponse.data });
      });
  }

  //create new experience
  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      emotionStatus,
      moodStatus,
      intention,
      userexperience,
      eatStatus,
      substance,
    } = this.state;

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/experience`,
        {
          emotionStatus,
          moodStatus,
          intention,
          userexperience,
          eatStatus,
          substance,
        },
        { withCredentials: true }
      )
      .then((experience) => {
        this.setState({
          emotionStatus: "",
          moodStatus: "",
          intention: "",
          userexperience: "",
          eatStatus: "",
          substance: "",
        });
        this.props.history.push(`/experience/start/${experience.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      listOfSubstances,
      // emotionStatus,
      // moodStatus,
      // intention,
      // userexperience,
      // eatStatus,
      // substance,
    } = this.state;

    return (
      <div className="siempre">
        <h1>Experience</h1>
        <h5>Before starting we need some information about you</h5>
        <form onSubmit={this.handleFormSubmit}>
          <label>How do you feel?</label>
          <select name="emotionStatus" onChange={this.handleChange}>
            <option value="Much Better">Much better than usual</option>
            <option value="Better">Better than usual</option>
            <option value="Same">Same as usual</option>
            <option value="Worse">Worse than usual</option>
            <option value="Much Worse">Much worse than usual</option>
          </select>
          <label>How is your mood?</label>
          <select name="moodStatus" onChange={this.handleChange}>
            <option value="Calm">Calm</option>
            <option value="Energized">Energized</option>
            <option value="Confident">Confident</option>
            <option value="Fearful">Fearful</option>
            <option value="Tense">Tense</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Depressed">Depressed</option>
          </select>
          <label>What is your intention?</label>
          <select name="intention" onChange={this.handleChange}>
            <option value="Discover">Discover</option>
            <option value="Grow">Grow</option>
            <option value="Fun">Fun</option>
            <option value="Transform">Transform</option>
            <option value="Heal">Heal</option>
            <option value="Concentration">Concentration</option>
            <option value="Relax">Relax</option>
            <option value="Activate">Activate</option>
          </select>
          <label>Frequency of use?</label>
          <select name="userexperience" onChange={this.handleChange}>
            <option value="First Time">First Time</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Often">Often</option>
            <option value="Habitually">Habitually</option>
          </select>
          <label>Have you eaten?</label>
          <select name="eatStatus" onChange={this.handleChange}>
            <option value="Empty">I am Empty</option>
            <option value="Normal">I am Normal</option>
            <option value="Full">I am Full</option>
          </select>
          <label>Select the substance:</label>
          <select name="substance" onChange={this.handleChange}>
            {/* map por la lista de substancias para poder selecionar el nombre de cada una */}
            {listOfSubstances.map((substance) => (
              <option
                key={substance._id}
                // className="substance"
                value={substance._id}
              >
                {substance.name}
              </option>
            ))}
          </select>

          {/* como sacar el id de la experience que acabo de crear arriba */}
          <button type="submit">CONTINUE</button>
        </form>
      </div>
    );
  }
}

export default withAuth(Experience);
