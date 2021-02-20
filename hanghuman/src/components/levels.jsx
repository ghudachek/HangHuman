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
  const [restart, setRestart] = useState(false);
  //takes API and returns three categories of levels..
  useEffect(() => {
    console.log(newGames);
    console.log(newGames[0].level);
    if (newGames !== 0) {
      newGames.map((ele) => {
        if (ele.level === "easy") {
          easy.push(ele);
        } else if (ele.level === "medium") {
          med.push(ele);
        } else if (ele.level === "hard") {
          hard.push(ele);
        }
      });
      set();
    }
  }, [restart]);

  function set() {
    setEasyLvl(easy[Math.floor(Math.random() * easy.length)]);
    setMedLvl(med[Math.floor(Math.random() * med.length)]);
    setHardLvl(hard[Math.floor(Math.random() * hard.length)]);
  }

  return (
    <div>
      {key.toString("") === "easy" ? (
        <CreateGame
          level={easyLvl}
          toggleFetch={toggleFetch}
          restart={restart}
        />
      ) : null}
      {key.toString("") === "medium" ? (
        <CreateGame
          level={medLvl}
          toggleFetch={toggleFetch}
          restart={restart}
        />
      ) : null}
      {key.toString("") === "hard" ? (
        <CreateGame
          level={hardLvl}
          toggleFetch={toggleFetch}
          restart={restart}
        />
      ) : null}
    </div>
  );
}

export default Levels;
