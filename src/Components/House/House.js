import React, { Component } from "react";
import "./House.scss";

function House(props) {
  return (
    <div>
      House
      <h1>Name: {props.name}</h1>
      <h3>Address: {props.address}</h3>
      <h3>City: {props.city}</h3>
      <h4>State: {props.state}</h4>
      <h4>Zipcode: {props.zipcode}</h4>
      <img src={props.pic} />
      <button>delete</button>
    </div>
  );
}

export default House;
