import React from "react";
import Die from "./components/Die";
import RollCounter from "./components/RollCounter";

import "./styles/AppStyle.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const App = () => {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(
    function () {
      const isAllHeld = dice.every((die) => die.isHeld);
      const isAllValueMatched = dice.every(
        (die) => die.value === dice[0].value
      );

      if (isAllHeld && isAllValueMatched) {
        console.log("You won!");
        setTenzies(true);
      }
    },
    [dice]
  );

  function generateDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const diceArray = [];

    for (let i = 0; i < 10; i++) {
      diceArray.push(generateDie());
    }

    return diceArray;
  }

  const mapDice = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      toggleHeld={toggleHeld}
    />
  ));

  function toggleHeld(id) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die;
      });
    });
  }

  function rollDice() {
    setCount((prevCount) => prevCount + 1);

    setDice((prevDice) => {
      return prevDice.map((die) => {
        if (tenzies) {
          setTenzies(false);
          setCount(0);
          return generateDie();
        } else {
          return !die.isHeld ? generateDie() : die;
        }
      });
    });
  }

  return (
    <main>
      {tenzies && <Confetti />}

      <RollCounter count={count} />

      <div className="card">
        <div className="card__desc">
          <h1 className="card__desc--title">Tenzies</h1>
          <p className="card__desc--instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>

        <div className="dice-container">{mapDice}</div>
        <button className="btn-roll" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
};

export default App;
