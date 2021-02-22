import React from "react";
import { useState, useEffect } from "react";
const Button = (props) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(false);
  }, [props.next]);

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
      }}
      key={props.letter}
    >
      {props.letter.toUpperCase()}
    </button>
  );
};

export default Button;
