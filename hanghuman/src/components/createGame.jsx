import React from "react";
import Alphabet from "./alphabet";
import { useState, useEffect } from "react";
import "./css/game.css";

const CreateGame = (props) => {
  const [guess, setGuess] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);
  const [next, setNext] = useState(false);
  const [display, setDisplay] = useState("none");
  let gameSet = {};
  let newGuess = [];

  useEffect(() => {
    if (props.level[0]) {
      if (score === props.level.length) {
        alert("CONGRATS...You beat all of these Levels! ");
        setScore(0);
      }
      if (score < props.level.length) {
        gameSet = props.level[score];
      } else {
        gameSet = props.level[0];
      }
      setSelectedWord(gameSet.word.toLowerCase(""));
      setCategory(gameSet.category);
      let splitWord = gameSet.word.split("");
      for (let i = 0; i < gameSet.word.length; i++) {
        if (splitWord[i] !== " ") {
          newGuess.push(" _ ");
        } else {
          newGuess.push(" ");
        }
      }

      setGuess(newGuess);
    }
  }, [props.level, next]);

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
      setScore(score + 1);
      setDisplay("inline");
      setTimeout(() => {
        alert("YOU WON!");
      }, 500);
    }
  }

  //Play next level button
  function playNext() {
    setDisplay("none");
    setNext((curr) => !curr);
  }

  return (
    <div className="all">
      <div className="game-start">
        <p>Score:{score}</p>
        <h3>Category:{category}</h3>
        {guess.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>
      <button
        className="next-btn"
        onClick={() => playNext()}
        style={{ display: display }}
      >
        Play Next
      </button>

      <Alphabet
        selectedWord={selectedWord}
        correctAnswers={correctAnswers}
        next={next}
      />
    </div>
  );
};

export default CreateGame;
