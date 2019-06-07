import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";

class Wizard extends Component {
  render() {
    return (
      <div>
        <Route path="/wizard/step1" component={Step1} />
        <Route path="/wizard/step2" component={Step2} />
        <Route path="/wizard/step3" component={Step3} />
        <Link to="/">
          <button>cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
