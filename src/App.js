import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "./components/pokemon/pokemon";
import HeroViewer from "./components/hero/hero";
import GamingViewer from "./components/gaming/gaming";
import DisneyViewer from "./components/disney/disney";

function App() {
  const [pokemonId, setPokemonId] = useState();
  const [heroId, setHeroId] = useState();
  const [gamingId, setGamingId] = useState();
  const [disneyId, setDisneyId] = useState();

  function handleClickPokemon() {
    setPokemonId(4);
  }

  function handleClickHero() {
    setHeroId(107);
    //black widow 107
    //scarlet witch 579
    //wonder woman 720
    //mystique 480
    //Captain Marvel 157
  }

  function handleClickGaming() {
    setGamingId(0x0003);
  }

  //setDisneyId();

  return (
    <div className="App">
      <br></br>
      <br></br>
      <button onClick={handleClickPokemon}>My favourite Pokemon is...</button>
      <PokemonViewer pokemonId={pokemonId} />
      <button onClick={handleClickHero}>My favourite Hero is...</button>
      <HeroViewer heroId={heroId} />
      <button onClick={handleClickGaming}>
        My favourite Gaming Character is...
      </button>
      <GamingViewer gamingId={gamingId} />
      <button onClick={handleClickGaming}>
        My favourite Disney Character is...
      </button>
      {/* <DisneyViewer disneyId={disneyId} /> */}
    </div>
  );
}

export default App;
