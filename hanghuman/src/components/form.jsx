import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";

function Form() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = {
      word,
      category,
      level,
    };
    console.log(newGame);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4> Create Game:</h4>
      <label> Word:</label>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <label> Category:</label>
      <input value={category} onChange={(e) => setCategory(e.target.value)} />
      <label> Choose a Level:</label>
      <button onClick={setLevel("easy")}>Easy</button>
      <button onClick={setLevel("medium")}>Medium</button>
      <button onClick={setLevel("medium")}>Hard</button>
    </form>
  );
}

export default Form;
