import React from "react";
import Alphabet from "./alphabet";
import { useState, useEffect } from "react";

const CreateGame = (props) => {
  const [guess, setGuess] = useState();
  const [selected, setSelected] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);
  const [category, setCategory] = useState("");
  const [] = useState();
  let newGuess = [];
  let holder = guess;

  if (toggleFetch === false) {
    setToggleFetch(true);
  }

  useEffect(() => {
    if (props.level.word) {
      setSelectedWord(props.level.word);
      setCategory(props.level.category);

      for (let i = 0; i < props.level.word.length; i++) {
        newGuess.push("____  ");
      }
      setGuess(newGuess);
    }
  }, [props.level]);

  function correctAnswers(letter) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        holder[i] = selectedWord[i];
        console.log(holder);
      }
    }
    setGuess(holder);
    console.log(guess); //changes!
  }

  return (
    <div>
      {props.level.word ? (
        <div>
          <h3>Category:{category}</h3>
          <p>Answer:</p>
          <p>{guess}</p>
        </div>
      ) : null}
      <Alphabet
        selectedWord={selectedWord}
        guess={guess}
        correctAnswers={correctAnswers}
      />
    </div>
  );
};

export default CreateGame;
