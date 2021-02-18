import Alphabet from "./alphabet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateGame from "./createGame";

function Levels(props) {
  let hard = [];
  const [hardLvl, setHardLvl] = useState([]);
  let med = [];
  const [medLvl, setMedLvl] = useState([]);
  let easy = [];
  const [easyLvl, setEasyLvl] = useState([]);
  const params = useParams();
  let key = Object.keys(params);

  let newGames = props.games.records.map((element) => element.fields);
  console.log(newGames);
  //takes API and returns three categories of levels..

  newGames.map((ele) => {
    if (ele.level.toString("") === "easy") {
      easy.push(ele);
    } else if (ele.level.toString("") === "medium") {
      med.push(ele);
    } else if (ele.level.toString("") === "hard") {
      hard.push(ele);
    }
    //set();
  });

  function set() {
    setEasyLvl(easy);
    setMedLvl(med);
    setHardLvl(hard);
  }

  return (
    <div>
      <Link to="/">Home</Link>
      {key.toString("") === "easy" ? <CreateGame level={easy} /> : null}
      {key.toString("") === "medium" ? <CreateGame level={med} /> : null}
      {key.toString("") === "hard" ? (
        <CreateGame level={hard} />
      ) : (
        console.log("none match")
      )}
    </div>
  );
}

export default Levels;
