import React from "react";
import Die from "./components/Die";
import "./styles/AppStyle.css";
import { nanoid } from "nanoid";

const App = () => {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const diceArray = [];

    for (let i = 0; i < 10; i++) {
      const die = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };

      diceArray.push(die);
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

  return (
    <main>
      <div className="card">
        <div className="dice-container">{mapDice}</div>
      </div>
    </main>
  );
};

export default App;
