import React from "react";
import Alphabet from "./alphabet";
import { useState, useEffect } from "react";
import "./game.css";

const CreateGame = (props) => {
  const [guess, setGuess] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [category, setCategory] = useState("");
  const [] = useState();
  let newGuess = [];

  console.log(props.level.word);
  useEffect(() => {
    if (props.level.word) {
      setSelectedWord(props.level.word);
      setCategory(props.level.category);

      if (guess.length === 0) {
        for (let i = 0; i < props.level.word.length; i++) {
          newGuess.push(" _ ");
        }
      }
      setGuess(newGuess);
    }
  }, [props.level]);
  console.log(guess);

  //checks for correct letters and updates lines when correct letter hits
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
  console.log(guess);
  function won() {
    if (guess.join("") === selectedWord) {
      alert("You Won!!");
      console.log("you won");
    }
  }

  //console.log(guess); updates

  return (
    <div className="all">
      <div className="game-start">
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
