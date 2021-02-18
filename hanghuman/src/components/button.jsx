import React from "react";
import { useState } from "react";

const Button = (props) => {
  const [disabled, setDisabled] = useState(false); //disables all buttons instead of just one..

  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        //console.log(props.letter);
        //console.log(props.incorrect.includes(props.letter));
        if (props.incorrect.includes(props.letter) === false) {
          console.log(props.answers.indexOf(props.letter));

          //changes guess but not updating..
          for (let i = 0; i < props.selectedWord.length; i++) {
            if (props.selectedWord[i] === props.letter) {
              props.guess[i] = props.selectedWord[i];
              console.log(props.guess);
            }
          }
          return props.guess;
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
