import React from "react";
import "../styles/RollCounterStyle.css";

const RollCounter = (props) => {
  return (
    <div className="counter-container">
      <h1 className="counter-label">Roll Counter: {props.count}</h1>
    </div>
  );
};

export default RollCounter;
