import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    this.getAllHouses();
  }
  getAllHouses = () => {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  };
  render() {
    const { houses } = this.state;

    const mappedHouses = houses.map(house => {
      return (
        <div key={house.id}>
          <House
            name={house.name}
            address={house.address}
            city={house.city}
            state={house.state}
            zipcode={house.zipcode}
            pic={house.pic_url}
          />
        </div>
      );
    });
    return (
      <div>
        Dashboard
        {mappedHouses}
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
