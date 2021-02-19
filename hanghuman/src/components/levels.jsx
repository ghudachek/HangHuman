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
  const [toggleFetch, setToggleFetch] = useState(false);
  let newGames = props.games.records.map((element) => element.fields);

  //console.log(newGames);
  //takes API and returns three categories of levels..
  useEffect(() => {
    newGames.map((ele) => {
      if (ele.level.toString("") === "easy") {
        easy.push(ele);
      } else if (ele.level.toString("") === "medium") {
        med.push(ele);
      } else if (ele.level.toString("") === "hard") {
        hard.push(ele);
      }
      set();
    });
  }, []);

  function set() {
    setEasyLvl(easy[Math.floor(Math.random() * easy.length)]);
    setMedLvl(med[Math.floor(Math.random() * med.length)]);
    setHardLvl(hard[Math.floor(Math.random() * hard.length)]);
  }
  console.log(easyLvl); //shows data..as object
  return (
    <div>
      <Link to="/">Home</Link>
      {key.toString("") === "easy" ? (
        <CreateGame level={easyLvl} toggleFetch={toggleFetch} />
      ) : null}
      {key.toString("") === "medium" ? (
        <CreateGame level={medLvl} toggleFetch={toggleFetch} />
      ) : null}
      {key.toString("") === "hard" ? (
        <CreateGame level={hardLvl} toggleFetch={toggleFetch} />
      ) : null}
    </div>
  );
}

export default Levels;
