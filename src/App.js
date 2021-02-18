import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home/home";
import PokemonViewer from "./components/pokemon/pokemon";
import HeroViewer from "./components/hero/hero";
import GamingViewer from "./components/gaming/gaming";
import DisneyViewer from "./components/disney/disney";
import AnimalViewer from "./components/animal/animal";

function App() {
  // const [disneyId, setDisneyId] = useState();

  //setDisneyId();

  return (
    <Router>
      <div className="App">
        &nbsp;&nbsp;
        <nav>
          <Link to="/">Home</Link>
          &nbsp; &nbsp;
          <Link to="/pokemon">Pokemon</Link>
          &nbsp; &nbsp;
          <Link to="/hero">Hero</Link>
          &nbsp; &nbsp;
          <Link to="/gaming">Gaming</Link>
          &nbsp; &nbsp;
          <Link to="/disney">Disney</Link>
          &nbsp; &nbsp;
          <Link to="/animal">Animal</Link>
        </nav>
        <Switch>
          <Route path="/pokemon">
            <PokemonViewer />
          </Route>
          <Route path="/hero">
            <HeroViewer />
          </Route>
          <Route path="/gaming">
            <GamingViewer />
          </Route>
          <Route path="/disney">
            <DisneyViewer />
          </Route>
          <Route path="/animal">
            <AnimalViewer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
