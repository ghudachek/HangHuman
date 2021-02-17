import Alphabet from "./alphabet";
import { useParams } from "react-router-dom";
function Levels(props) {
  let hard = [];
  let med = [];
  let easy = [];
  let guess = "";
  const params = useParams();
  let key = Object.keys(params);
  console.log(key);
  //console.log(props.games);
  props.games.map((ele) => {
    if (ele.level.toString("") === "easy") {
      return easy.push(ele);
    } else if (ele.level.toString("") === "medium") {
      med.push(ele);
    } else if (ele.level.toString("") === "hard") {
      hard.push(ele);
    }
  });
  for (let i = 0; i < easy[0].word.length; i++) {
    guess += "___  ";
  }
  return (
    <div>
      <h1>Category: {easy[0].category}</h1>
      <p>{guess}</p>
      <Alphabet />
    </div>
  );
}

export default Levels;
