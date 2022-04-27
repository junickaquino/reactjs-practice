import React from "react";
import "../styles/Scoreboard.css";

const Scoreboard = (props) => {
  console.log(props.scores);

  const mapScores = props.scores.map((score) => {
    return (
      <div className="score-data">
        <p className="data-rank">{props.scores.indexOf(score) + 1}</p>
        <p className="data-roll">{score.rolls}</p>
        {/* <p className="data-time">40 sec</p> */}
      </div>
    );
  });

  return (
    <div className="scoreboard-container">
      <h1 className="board-title">Scoreboard</h1>
      <div className="score-data">
        <p className="data-rank">Rank</p>
        <p className="data-roll">Rolls</p>
        {/* <p className="data-time">Time</p> */}
      </div>
      {mapScores}
    </div>
  );
};

export default Scoreboard;
