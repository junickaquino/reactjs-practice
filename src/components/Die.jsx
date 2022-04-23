import React from "react";
import "../styles/DieStyle.css";

const Die = (props) => {
  return <div className="die-face">{props.value}</div>;
};

export default Die;
