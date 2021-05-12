import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CreateGame from "./CreateGame";
import "./css/game.css";

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
  //takes API and returns three categories of levels..
  useEffect(() => {
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
  }, [props.toggleFetch]);

  function set() {
    setEasyLvl(easy);
    setMedLvl(med);
    setHardLvl(hard);
  }

  return (
    <div className="levels">
      <div className="levels-link">
        <Link to="/">Home</Link>
      </div>
      {key.toString("") === "easy" ? (
        <CreateGame level={easyLvl} toggleFetch={props.toggleFetch} />
      ) : null}
      {key.toString("") === "medium" ? (
        <CreateGame level={medLvl} toggleFetch={props.toggleFetch} />
      ) : null}
      {key.toString("") === "hard" ? (
        <CreateGame level={hardLvl} toggleFetch={props.toggleFetch} />
      ) : null}
    </div>
  );
}

export default Levels;
