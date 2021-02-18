import { useState } from "react";
function Alphabet(props) {
  let incorrect = [];
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
  const [disabled, setDisabled] = useState(false); //disables all buttons instead of just one..
  let answers = props.selectedWord.split(""); // gives each letter in an array for word
  alphabet.map((letter) => {
    if (answers.includes(letter) === false) {
      incorrect.push(letter);
    }
  });
  //console.log(incorrect);
  let indicies = [];
  ///grab all insidences of a letter in selctedWord...

  return alphabet.map((letter) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        console.log(letter);
        console.log(incorrect.includes(letter));
        if (incorrect.includes(letter) === false) {
          console.log(answers.indexOf(letter));
          for (let i = 0; i < props.selectedWord.length; i++) {
            if (props.selectedWord[i] === letter) {
              props.guess[i] = props.selectedWord[i];
              console.log(props.guess);
            }
          }
          return props.guess;
        }
      }}
      key={letter}
    >
      {letter.toUpperCase()}
    </button>
  ));
}
export default Alphabet;
