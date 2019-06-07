import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setListing } from "../../Ducks/reducer";

class Step3 extends Component {
  constructor() {
    super();

    this.state = {
      monthlyMortgage: 0,
      desired: 0
    };
  }

  addHouse = () => {
    const { name, address, city, state, zipcode } = this.state;
    const payload = { name, address, city, state, zipcode };
    axios.post("/api/houses", payload).then(res => {
      this.props.setListing(res.data);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        {" "}
        <h1>Add New Listing</h1>
        <button onClick={this.addHouse}>Complete</button>
      </div>
    );
  }
}

export default Step3;
