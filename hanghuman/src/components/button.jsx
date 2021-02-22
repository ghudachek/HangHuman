import React from "react";
import { useState } from "react";
const Button = (props) => {
  const [disabled, setDisabled] = useState(false);

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
          props.decrement();
        }
        if (props.next === false) {
          setDisabled(false);
        }
      }}
      key={props.letter}
    >
      {props.letter.toUpperCase()}
    </button>
  );
};

export default Button;
