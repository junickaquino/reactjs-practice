import React from "react";
import "../styles/DieStyle.css";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die-face" style={styles}>
      {props.value}
    </div>
  );
};

export default Die;
