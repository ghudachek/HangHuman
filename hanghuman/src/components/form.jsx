import axios from "axios";
import { baseURL, config } from "../services";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form(props) {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      word,
      category,
      level,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);

    alert("Form Submitted!");
  };

  return (
    <div className="form">
      <div className="link">
        <Link to="/">Home</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <h4> Create Game:</h4>
        <label> Word:</label>
        <input value={word} onChange={(e) => setWord(e.target.value)} />
        <br />
        <label> Category:</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
        <br />
        <label> Choose a Level:</label>
        <br />
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value={"easy"}>Easy</option>
          <option value={"medium"}>Medium</option>
          <option value={"hard"}>Hard</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
