import { useEffect, useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const everyDiceIsHeld = dice.every((die) => die.isHeld);

    const firstValue = dice[0].value;
    const everyDiceHasSameValue = dice.every((die) => die.value === firstValue);

    if (everyDiceIsHeld && everyDiceHasSameValue) {
      console.log("Game won");
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      key: nanoid(),
    };
  }

  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(generateNewDie());
    }
    return array;
  }

  // runs when the roll dice button is pressed
  // doesnt change the dice which are held
  function rollDice() {
    setDice(
      dice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  //helper function which enables to toggle the isHeld property of the die object
  //runs onClick of Die component
  function holdDice(id) {
    setDice(
      dice.map((die) => {
        return die.key === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function newGame() {
    setDice(allNewDice());
    setTenzies(false);
  }

  return (
    <main>
      {tenzies && <Confetti />}
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
      <button className="roll-button" onClick={tenzies ? newGame : rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
