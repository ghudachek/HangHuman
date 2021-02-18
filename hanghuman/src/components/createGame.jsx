import React from "react";
import Alphabet from "./alphabet";
import { useState, useEffect } from "react";

const CreateGame = (props) => {
  let newGuess = [];
  const [guess, setGuess] = useState([]);
  let news = [];
  const [selected, setSelected] = useState();
  const [selectedWord, setSelectedWord] = useState("");
  let rightLetters = [];
  let category = "";
  news = props.level[Math.floor(Math.random() * props.level.length)];
  useEffect(() => {
    if (news) {
      console.log(news);
      setSelected(news);
      setSelectedWord(selected.word);

      for (let i = 0; i < selectedWord.length; i++) {
        newGuess.push("____  ");
      }
      setGuess(newGuess);
      category = selected.category;
      selectedWord.split("").map((letter) => rightLetters.push(letter));
    }
  }, [news]);

  return (
    <div>
      <h3>Category:{category}</h3>
      <p>Answer:</p>
      {selectedWord.split().map((letter) => (
        <span key={letter} style={{ visibility: "visible" }}>
          {letter}
        </span>
      ))}
      <p>{guess}</p>
      <Alphabet selectedWord={selectedWord} guess={guess} />
    </div>
  );
};

export default CreateGame;
