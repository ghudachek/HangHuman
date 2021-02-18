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
  //const [data, setData] = useState();
  const [games, setGames] = useState();
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    const getData = async () => {
      console.log("running api grab");
      const resp = await axios.get(baseURL, config);
      // setGames(resp.data.records.map((element) => element.fields));
      setGames(resp.data);
      console.log(games);
      //setData(resp.data.records);
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
        <Form setToggleFetch={setToggleFetch} />
        <Link to="/">Home</Link>
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
