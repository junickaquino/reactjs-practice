import React from "react";
import "../styles/Scoreboard.css";

const Scoreboard = (props) => {
  return (
    <div className="scoreboard-container">
      <h1 className="board-title">Scoreboard</h1>
      <div className="score-data">
        <p className="data-rank">Rank</p>
        <p className="data-roll">Rolls</p>
        <p className="data-time">Time</p>
      </div>
      <div className="score-data">
        <p className="data-rank">1</p>
        <p className="data-roll">{props.count}</p>
        <p className="data-time">40 sec</p>
      </div>
    </div>
  );
};

export default Scoreboard;
