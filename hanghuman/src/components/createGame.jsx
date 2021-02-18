import React from "react";
import Alphabet from "./alphabet";
import { useState } from "react";

const CreateGame = (props) => {
  let newGuess = [];
  const [guess, setGuess] = useState();

  let rightLetters = [];
  let selectedWord = null;
  let category = null;
  let selected = null;

  console.log(props.level + "switch is running");

  selected = props.level[Math.floor(Math.random() * props.level.length)];
  selectedWord = selected.word;
  category = selected.category;
  for (let i = 0; i < selectedWord.length; i++) {
    newGuess.push("____  ");
    //setGuess(newGuess);
  }
  selectedWord.split("").map((letter) => rightLetters.push(letter));

  return (
    <div>
      <h3>Category:{category}</h3>
      <p>Answer:</p>
      {selectedWord.split().map((letter) => (
        <span key={letter} style={{ visibility: "hidden" }}>
          {letter}
        </span>
      ))}
      <p>{newGuess}</p>
      <Alphabet selectedWord={selectedWord} guess={guess} />
    </div>
  );
};

export default CreateGame;
