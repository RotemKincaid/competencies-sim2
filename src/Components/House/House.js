import React, { Component } from "react";
import "./House.scss";
import axios from "axios";
import { connect } from "react-redux";

class House extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      name: ""
    };
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  nameHandler = e => {
    this.setState({ name: e.target.value });
    let { name } = this.props;
    name = this.state.name;
  };
  // console.log(props);
  render() {
    // const { house_id } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h3>Address: {this.props.address}</h3>
        <h3>City: {this.props.city}</h3>
        <h4>State: {this.props.state}</h4>
        <h4>Zipcode: {this.props.zipcode}</h4>
        <img src={this.props.pic} alt="house" />
        <button onClick={() => this.props.deleteHouse(this.props.id)}>
          delete
        </button>
        {this.state.isEditing ? (
          <div>
            <input
              value={this.state.name}
              onChange={e => this.nameHandler(e)}
            />
            <button onClick={e => this.props.editHouse(e)}>Save Edit</button>
          </div>
        ) : (
          <button onClick={this.toggleEdit}>edit listing</button>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

// const mapDispatchToProps = {
//   setListing: setListing
// };
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(House);
