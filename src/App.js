import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home/home";
import PokemonViewer from "./components/pokemon/pokemon";
import HeroViewer from "./components/hero/hero";
import GamingViewer from "./components/gaming/gaming";
import DisneyViewer from "./components/disney/disney";

function App() {
  // const [pokemonId, setPokemonId] = useState();
  // const [heroId, setHeroId] = useState();
  // const [gamingId, setGamingId] = useState();
  const [disneyId, setDisneyId] = useState();

  // function handleClickPokemon() {
  //   setPokemonId(4);
  // }

  // function handleClickHero() {
  //   setHeroId(107);
  //   //black widow 107
  //   //scarlet witch 579
  //   //wonder woman 720
  //   //mystique 480
  //   //Captain Marvel 157
  // }

  // function handleClickGaming() {
  //   setGamingId(0x0003);
  // }

  //setDisneyId();

  return (
    <Router>
      <div className="App">
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
