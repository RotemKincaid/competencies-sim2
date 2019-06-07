import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setListing } from "../../Ducks/reducer";
import "./Step2.scss";

class Step2 extends Component {
  constructor() {
    super();

    this.state = {
      pic_url: ""
    };
  }
  picHandler = e => {
    this.setState({
      pic_url: e.target.value
    });
  };
  render() {
    const { pic_url } = this.state;
    return (
      <div className="step2-main">
        <div className="step2-inner">
          <h1>Add New Listing</h1>
          Picture URL: <input value={pic_url} onChange={this.picHandler} />
          <Link to="/wizard/step1">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/step3">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Step2;
