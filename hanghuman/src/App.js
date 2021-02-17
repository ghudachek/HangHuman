import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { baseURL, config } from "./services";
import axios from "axios";
import Levels from "./components/levels";
import Header from "./components/header";
import Form from "./components/form";

function App() {
  const [data, setData] = useState();
  const [games, setGames] = useState();

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setGames(resp.data.records.map((element) => element.fields));
      //console.log(resp.data.records);
      setData(resp.data.records);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Route path="/">
        <Header />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route exact path="/easy/:easy">
        {games ? <Levels games={games} /> : null}
      </Route>
      <Route exact path="/medium/:medium">
        {games ? <Levels games={games} /> : null}
      </Route>
      <Route exact path="/hard/:hard">
        {games ? <Levels games={games} /> : null}
      </Route>
    </div>
  );
}

export default App;
