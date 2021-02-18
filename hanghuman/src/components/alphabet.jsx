import Button from "./button";
function Alphabet(props) {
  let incorrect = [];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //create two categories? one for disabled letters one for abled..? and add buttons to it when clicked

  let answers = props.selectedWord.split(""); // gives each letter in an array for word
  alphabet.map((letter) => {
    if (answers.includes(letter) === false) {
      incorrect.push(letter);
    }
  });
  //console.log(incorrect);

  return alphabet.map((letter) => (
    <Button
      selectedWord={props.selectedWord}
      letter={letter}
      incorrect={incorrect}
      answers={answers}
      guess={props.guess}
    />
  ));
}
export default Alphabet;
