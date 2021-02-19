import React from "react";
import { useState, useEffect } from "react";

const Button = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [wrong, setWrong] = useState(0);

  const increment = () => {
    setWrong(wrong + 1);
  };
  console.log(wrong);
  return (
    <button
      className="game-btn"
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        if (props.incorrect.includes(props.letter) === false) {
          props.correctAnswers(props.letter);
          setDisabled(true);
        } else {
          setDisabled(true);
          increment();
        }
      }}
      key={props.letter}
    >
      {props.letter.toUpperCase()}
    </button>
  );
};

export default Button;
