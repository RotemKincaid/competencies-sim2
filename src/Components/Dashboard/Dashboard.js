import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import axios from "axios";
import { setListing } from "../../Ducks/reducer";
import { connect } from "react-redux";

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

  deleteHouse = id => {
    axios.delete(`/api/houses/${id}`).then(res => {
      console.log("Hit delete", res);
      this.setState({
        houses: res.data
      });
    });
  };

  editHouse = e => {
    const {
      name,
      house_id,
      address,
      city,
      houseState,
      zipcode,
      pic_url,
      monthly_mortgage_amount,
      desired_rent
    } = this.props;
    const { id } = this.props.match.params;
    // const payload = {
    //   name,
    //   address,
    //   city,
    //   houseState,
    //   zipcode,
    //   pic_url,
    //   monthly_mortgage_amount,
    //   desired_rent
    // };
    // let updatedName = name
    axios.put(`/api/houses/${id}`, name).then(res => {
      console.log(res, "RES FROM DASHBOARD");
      this.props.setListing(res.data);
    });
  };

  render() {
    const { houses } = this.state;
    console.log(this.props);
    console.log(houses);

    const mappedHouses = houses.map(house => {
      return (
        <div key={house.house_id}>
          <House
            id={house.house_id}
            name={house.name}
            address={house.address}
            city={house.city}
            state={house.state}
            zipcode={house.zipcode}
            pic={house.pic_url}
            deleteHouse={this.deleteHouse}
            editHouse={this.editHouse}
          />
        </div>
      );
    });
    return (
      <div>
        Dashboard
        {mappedHouses}
        <Link to="/wizard/step1">
          <button>Add New Property</button>
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
)(Dashboard);
