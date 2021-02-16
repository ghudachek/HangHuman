import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { baseURL, config } from "./services";
import axios from "axios";
import Levels from "./components/levels";
import Header from "./components/header";
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setData(resp.data.records);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Levels />
    </div>
  );
}

export default App;
