import React from "react";
import Alphabet from "./alphabet";

import { useState, useEffect } from "react";

const CreateGame = (props) => {
  const [guess, setGuess] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);
  const [category, setCategory] = useState("");
  const [] = useState();
  let newGuess = [];
  let holder = guess;

  useEffect(() => {
    if (props.level.word) {
      setSelectedWord(props.level.word);
      setCategory(props.level.category);

      for (let i = 0; i < props.level.word.length; i++) {
        newGuess.push("____  ");
      }
      setGuess(newGuess);
    }
  }, [props.level, props.restart]);

  function correctAnswers(letter) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guess[i] = selectedWord[i];
        setGuess(
          guess.map((line, index) => {
            if (i === index) {
              return selectedWord[i];
            } else {
              return line;
            }
          })
        );
      }
    }
    won();
  }

  function won() {
    if (guess.join("") === selectedWord) {
      alert("You Won!!");
      console.log("you won");
    }
  }

  //console.log(guess); updates

  return (
    <div>
      <div>
        <h3>Category:{category}</h3>
        <p>Answer:</p>
        {guess.map((line) => (
          <span>{line}</span>
        ))}
      </div>

      <Alphabet selectedWord={selectedWord} correctAnswers={correctAnswers} />
    </div>
  );
};

export default CreateGame;
