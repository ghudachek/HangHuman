import React from "react";
import Alphabet from "./alphabet";
import { useState, useEffect } from "react";
import "./css/game.css";

const CreateGame = (props) => {
  const [guess, setGuess] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [category, setCategory] = useState("");
  const [] = useState();
  let newGuess = [];

  useEffect(() => {
    if (props.level.word) {
      setSelectedWord(props.level.word);
      setCategory(props.level.category);
      let splitWord = props.level.word.split("");
      if (guess.length === 0) {
        for (let i = 0; i < props.level.word.length; i++) {
          if (splitWord[i] !== " ") {
            newGuess.push(" _ ");
          } else {
            newGuess.push(" ");
          }
        }
      }
      setGuess(newGuess);
    }
  }, [props.level]);

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

  function won() {
    if (guess.join("") === selectedWord) {
      alert("You Won!!");
    }
  }

  return (
    <div className="all">
      <div className="game-start">
        <h3>Category:{category}</h3>
        {guess.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>
      <Alphabet selectedWord={selectedWord} correctAnswers={correctAnswers} />
    </div>
  );
};

export default CreateGame;
