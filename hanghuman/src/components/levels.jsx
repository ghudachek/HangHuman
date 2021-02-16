import { baseURL, config } from "../services";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Levels() {
  let hard = [];
  let med = [];
  let easy = [];
  let games = [];

  useEffect(() => {
    const getLevels = async () => {
      const resp = await axios.get(baseURL, config);
      games = resp.data.records.map((element) => element.fields);
      //console.log(games);
      function placeGames() {
        if (games !== []) {
          console.log(games);
          games.map((ele) => {
            if (ele.level.toString("") === "easy") {
              return easy.push(ele);
            } else if (ele.level.toString("") === "medium") {
              med.push(ele);
            } else if (ele.level.toString("") === "hard") {
              hard.push(ele);
            }
          });
        }
      }
      placeGames();
    };
    getLevels();
  }, []);

  return (
    <div>
      <p>under construction...</p>
    </div>
  );
}

export default Levels;
