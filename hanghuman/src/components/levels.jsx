import Alphabet from "./alphabet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Levels(props) {
  let hard = [];
  let med = [];
  let easy = [];
  let guess = [];
  const [guesses, setGuesses] = useState([]);
  const params = useParams();
  let key = Object.keys(params);
  let rightLetters = [];
  let selectedWord = null;
  let category = null;
  let selected = null;
  //console.log(key);
  //console.log(props.games);
  //takes API and returns three categories of levels..
  props.games.map((ele) => {
    if (ele.level.toString("") === "easy") {
      return easy.push(ele);
    } else if (ele.level.toString("") === "medium") {
      med.push(ele);
    } else if (ele.level.toString("") === "hard") {
      hard.push(ele);
    }
  });
  //console.log(key);
  if (key.toString("") === "easy") {
    console.log("easy switch is running");
    selected = easy[Math.floor(Math.random() * easy.length)];
    selectedWord = selected.word;
    category = selected.category;
    for (let i = 0; i < selectedWord.length; i++) {
      guess.push("____  ");
    }
    selectedWord.split("").map((letter) => rightLetters.push(letter));
  } else if (key.toString("") === "medium") {
    selected = med[Math.floor(Math.random() * med.length)];
    selectedWord = selected.word;
    category = selected.category;
    for (let i = 0; i < selectedWord.length; i++) {
      guess.push("____  ");
    }
    //console.log(guess);
    console.log(selectedWord);
    selectedWord.split("").map((letter) => rightLetters.push(letter));
  } else if (key.toString("") === "hard") {
    selected = hard[Math.floor(Math.random() * hard.length)];
    selectedWord = selected.word;

    category = selected.category;
    for (let i = 0; i < selectedWord.length; i++) {
      guess.push("____  ");
    }
    selectedWord.split("").map((letter) => rightLetters.push(letter));
  } else {
    console.log("none match key");
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <h3>Category:{category}</h3>
      <p>Answer:</p>
      {selectedWord.split().map((letter) => (
        <span key={letter} style={{ visibility: "hidden" }}>
          {letter}
        </span>
      ))}
      <p>{guess}</p>
      <Alphabet selectedWord={selectedWord} guess={guess} />
    </div>
  );
}

export default Levels;
