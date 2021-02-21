import "./App.css";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import Levels from "./components/levels";
import Header from "./components/header";
import Form from "./components/form";

function App() {
  const [games, setGames] = useState();
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);

      setGames(resp.data);
      console.log(resp.data);
    };
    getData();
  }, [toggleFetch]);

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Truculenta:wght@100;500&display=swap"
        rel="stylesheet"
      />
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/form">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/easy/:easy">
        {games ? <Levels games={games} toggleFetch={toggleFetch} /> : null}
      </Route>
      <Route exact path="/medium/:medium">
        {games ? <Levels games={games} toggleFetch={toggleFetch} /> : null}
      </Route>
      <Route exact path="/hard/:hard">
        {games ? <Levels games={games} toggleFetch={toggleFetch} /> : null}
      </Route>
    </div>
  );
}

export default App;
