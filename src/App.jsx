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

  function holdDice(id) {
    console.log(id);

    setDice(
      dice.map((die) => {
        if (die.key === id) {
          return { ...die, isHeld: !die.isHeld };
        } else {
          return die;
        }
      })
    );
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
          return (
            <Die
              key={obj.key}
              value={obj.value}
              isHeld={obj.isHeld}
              handleClick={() => {
                holdDice(obj.key);
              }}
            />
          );
        })}
      </div>
      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
