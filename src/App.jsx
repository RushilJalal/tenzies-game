import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      };
      array.push(obj);
    }
    return array;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main>
      <h1>Tenzies</h1>
      <h2>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h2>
      <div className="die-container">
        {dice.map((obj, index) => {
          return <Die key={index} value={obj.value} />;
        })}
      </div>
      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
