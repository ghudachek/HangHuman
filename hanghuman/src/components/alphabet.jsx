import Button from "./button";
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
  //create two categories? one for disabled letters one for abled..? and add buttons to it when clicked

  let answers = props.selectedWord.split(""); // gives each letter in an array for word
  alphabet.map((letter) => {
    if (answers.includes(letter) === false) {
      incorrectLet.push(letter);
    }
  });
  useEffect(() => {
    console.log(incorrectLet); //gives all incorrect letters
    if (incorrect === 0) {
      setIncorrect(incorrectLet.length);
    }
  }, [incorrect]);

  function decrement() {
    setIncorrect(incorrect - 1);
  }
  console.log(incorrect);

  return alphabet.map((letter) => (
    <Button
      key={letter}
      selectedWord={props.selectedWord}
      letter={letter}
      incorrect={incorrectLet}
      decrement={decrement}
      answers={answers}
      correctAnswers={props.correctAnswers}
    />
  ));
}
export default Alphabet;
