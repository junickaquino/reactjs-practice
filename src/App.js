import React from "react";
import Die from "./components/Die";
import "./styles/AppStyle.css";

const App = () => {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const diceArray = [];

    for (let i = 0; i < 10; i++) {
      const die = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      };

      diceArray.push(die);
    }

    console.log(diceArray);
    return diceArray;
  }

  const mapDice = dice.map((die) => (
    <Die value={die.value} isHeld={die.isHeld} />
  ));

  return (
    <main>
      <div className="card">
        <div className="dice-container">{mapDice}</div>
      </div>
    </main>
  );
};

export default App;
