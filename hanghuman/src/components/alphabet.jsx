import Button from "./button";
import StickFigure2 from "./stickFigure2";
import { useState, useEffect } from "react";

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
  console.log("letters left in incorrect:" + incorrect);

  return alphabet.map((letter) => (
    <div>
      <Button
        key={letter}
        selectedWord={props.selectedWord}
        letter={letter}
        incorrect={incorrectLet}
        decrement={decrement}
        answers={answers}
        correctAnswers={props.correctAnswers}
      />
      <StickFigure2 incorrect={incorrect} />
    </div>
  ));
}
export default Alphabet;
