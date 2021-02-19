import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { baseURL, config } from "./services";
import axios from "axios";
import Levels from "./components/levels";
import Header from "./components/header";
import Form from "./components/form";
import StickFigure from "./components/stickFigure";

function App() {
  const [games, setGames] = useState();
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    const getData = async () => {
      console.log("running api grab");
      const resp = await axios.get(baseURL, config);

      setGames(resp.data);
    };
    getData();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <StickFigure />
      </Route>
      <Route exact path="/form">
        <Link to="/">Home</Link>
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/easy/:easy">
        <Link to="/">Home</Link>
        {games ? <Levels games={games} /> : null}
      </Route>
      <Route exact path="/medium/:medium">
        <Link to="/">Home</Link>
        {games ? <Levels games={games} /> : null}
      </Route>
      <Route exact path="/hard/:hard">
        <Link to="/">Home</Link>
        {games ? <Levels games={games} /> : null}
      </Route>
    </div>
  );
}

export default App;
