import React from "react";
import { useState } from "react";

const Button = (props) => {
  const [disabled, setDisabled] = useState(false); //disables all buttons instead of just one..

  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        if (props.incorrect.includes(props.letter) === false) {
          props.correctAnswers(props.letter);
        } else {
          setDisabled(true);
        }
      }}
      key={props.letter}
    >
      {props.letter.toUpperCase()}
    </button>
  );
};

export default Button;
