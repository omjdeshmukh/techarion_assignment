import React from "react";
import "./App.css";

const Data = (props) => {
  return (
    <div className="container_card">
      <div>
        <h3> {props.user_id} </h3>
        <h3> {props.title} </h3>
        <h4> {props.status} </h4>
      </div>
    </div>
  );
};

export default Data;
