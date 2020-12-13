import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import axios from "axios";
import {Link} from "react-router-dom";

class ExpDetails extends Component {
  state = {
    
  }
  render() {
    return (
      <div>
        <h1>ExpDetails </h1>
      </div>
    );
  }
}

export default withAuth(ExpDetails);