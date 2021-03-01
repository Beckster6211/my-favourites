import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home/home";
import PokemonViewer from "./components/pokemon/pokemon";
import HeroViewer from "./components/hero/hero";
import GamingViewer from "./components/gaming/gaming";
import DisneyViewer from "./components/disney/disney";
import AnimalViewer from "./components/animal/animal";
//import Food from "./components/food/food";

function App() {
  return (
    <Router>
      <div className="App">
        &nbsp;&nbsp;
        <nav className="nav">
          <Link className="link" to="/">
            Home 🏠
          </Link>
          &nbsp; &nbsp;
          <Link className="link" to="/pokemon">
            Pokemon
            <img
              className="pokemon"
              src="./Poke_Ball.png"
              alt="pokeBall icon"
            ></img>
          </Link>
          &nbsp; &nbsp;
          <Link className="link" to="/hero">
            Hero 🦸
          </Link>
          &nbsp; &nbsp;
          <Link className="link" to="/gaming">
            Gaming 🎮
          </Link>
          &nbsp; &nbsp;
          <Link className="link" to="/disney">
            Disney{" "}
            <img
              className="disney"
              src="./dc5fee0189b193c8ebf8e19076ad56f0.png"
              alt="Walt Disney logo"
            ></img>
          </Link>
          &nbsp; &nbsp;
          <Link className="link" to="/animal">
            Animal 🐾
          </Link>
          &nbsp; &nbsp;
          {/* <Link to="/food">Food</Link> */}
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
          {/* <Route path="/food">
            <Food />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
