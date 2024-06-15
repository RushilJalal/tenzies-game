import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        key: nanoid(),
      });
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
        {dice.map((obj) => {
          return <Die key={obj.key} value={obj.value} isHeld={obj.isHeld} />;
        })}
      </div>
      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
