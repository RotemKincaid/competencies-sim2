import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setListing } from "../../Ducks/reducer";
import "./Step1.scss";

class Step1 extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      listing: {}
    };
  }
  nameHandler = e => {
    this.setState({
      name: e.target.value
    });
    this.state.name = this.props.name;
  };

  addressHandler = e => {
    this.setState({
      address: e.target.value
    });
  };

  cityHandler = e => {
    this.setState({
      city: e.target.value
    });
  };

  stateHandler = e => {
    this.setState({
      state: e.target.value
    });
  };

  zipHandler = e => {
    this.setState({
      zipcode: e.target.value
    });
  };

  saveToProps = () => {
    const { name, address, city, state, zipcode } = this.state;
    const listing = { name, address, city, state, zipcode };
    this.props.setListing(listing);
  };

  render() {
    console.log(this.props);
    const { name, address, city, state, zipcode } = this.state;

    return (
      <div className="step1-main">
        <h1 className="step1-add-new">Add New Listing</h1>
        Name: <input value={name} onChange={this.nameHandler} />
        Address: <input value={address} onChange={this.addressHandler} />
        City: <input value={city} onChange={this.cityHandler} />
        State: <input value={state} onChange={this.stateHandler} />
        Zip Code: <input value={zipcode} onChange={this.zipHandler} />
        <Link to="/wizard/step2">
          <button onClick={() => this.saveToProps()}>Next Step</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  setListing: setListing
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1);
