import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Experience from "./pages/Experience";
import Track from "./pages/Track";
import Substance from "./pages/Substance";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Learn from "./pages/Learn";
import History from "./pages/History";
import ExpDetails from "./pages/ExpDetails";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/experience" component={Experience} />
          <PrivateRoute exact path="/experience/track" component={Track} />
          <PrivateRoute exact path="/experience/history" component={History} />
          <PrivateRoute exact path="/experience/:id" component={ExpDetails} />
          <PrivateRoute exact path="/learn" component={Learn} />
          <PrivateRoute exact path="/learn/:id" component={Substance} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
