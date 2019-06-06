import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      pic_url: ""
    };
  }

  nameHandler = e => {
    this.setState({
      name: e.target.value
    });
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

  picHandler = e => {
    this.setState({
      pic_url: e.target.value
    });
  };
  addHouse = () => {
    const { name, address, city, state, zipcode, pic_url } = this.state;
    const payload = { name, address, city, state, zipcode, pic_url };
    axios.post("/api/houses", payload).then(() => {
      this.setState({
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        pic_url: ""
      });
      this.props.history.push("/");
    });
  };

  render() {
    const { name, address, city, state, zipcode, pic_url } = this.state;
    return (
      <div>
        <Link to="/">
          <button>cancel</button>
        </Link>
        Name: <input value={name} onChange={this.nameHandler} />
        Address: <input value={address} onChange={this.addressHandler} />
        City: <input value={city} onChange={this.cityHandler} />
        State: <input value={state} onChange={this.stateHandler} />
        Zip Code: <input value={zipcode} onChange={this.zipHandler} />
        Picture URL: <input value={pic_url} onChange={this.picHandler} />
        <button onClick={this.addHouse}>Complete</button>
      </div>
    );
  }
}

export default Wizard;
