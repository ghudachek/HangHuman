import Button from "./button";
import HangHuman from "./hanghuman.jsx";
import WinLose from "./winlose";
import { useState, useEffect } from "react";
import "./css/hang-human.css";

function Alphabet(props) {
  let incorrectLet = [];
  const [incorrect, setIncorrect] = useState(0);
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  //give incorrect letters and map how many are removed when letters clicked
  let answers = props.selectedWord.split("");

  alphabet.map((letter) => {
    if (answers.includes(letter) === false) {
      incorrectLet.push(letter);
    }
  });

  function decrement() {
    setIncorrect(incorrect + 1);
  }

  return (
    <div className="alphabet">
      <WinLose incorrect={incorrect} />
      <div className="buttons">
        {alphabet.map((letter) => (
          <Button
            key={letter}
            selectedWord={props.selectedWord}
            letter={letter}
            incorrect={incorrectLet}
            decrement={decrement}
            answers={answers}
            correctAnswers={props.correctAnswers}
          />
        ))}
      </div>
      <div className="hangman">
        <HangHuman incorrect={incorrect} />
      </div>
    </div>
  );
}
export default Alphabet;
