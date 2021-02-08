import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "./components/pokemon/pokemon";
import HeroViewer from "./components/hero/hero";
import GamingViewer from "./components/gaming/gaming";

function App() {
  const [pokemonId, setPokemonId] = useState();
  const [heroId, setHeroId] = useState();
  const [gamingId, setGamingId] = useState();

  function handleClickPokemon() {
    setPokemonId(4);
    setGamingId("00030000");
  }

  function handleClickHero() {
    //black widow 107
    //scarlet witch 579
    //wonder woman 720
    //mystique 480
    //Captain Marvel 157
    setHeroId(107);
  }

  return (
    <div className="App">
      <br></br>
      <br></br>
      <button onClick={handleClickPokemon}>My favourite Pokemon is...</button>
      <PokemonViewer pokemonId={pokemonId} />
      <button onClick={handleClickHero}>My favourite Hero is...</button>
      <HeroViewer heroId={heroId} />
      <GamingViewer gamingId={gamingId} />
    </div>
  );
}

export default App;
