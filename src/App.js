import React from "react";
import Die from "./components/Die";
import "./styles/AppStyle.css";

const App = () => {
  return (
    <main>
      <div className="card">
        <div className="dice-container">
          <Die value="1" />
          <Die value="2" />
          <Die value="3" />
          <Die value="4" />
          <Die value="5" />
          <Die value="6" />
          <Die value="1" />
          <Die value="2" />
          <Die value="3" />
          <Die value="4" />
        </div>
      </div>
    </main>
  );
};

export default App;
