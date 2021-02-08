import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "./components/pokemon/pokemon";
import HeroViewer from "./components/hero/hero";

function App() {
  const [pokemonId, setPokemonId] = useState();
  const [heroId, setHeroId] = useState();

  function handleClickPokemon() {
    setPokemonId(4);
  }

  function handleClickHero() {
    //black widow 107
    //scarlet witch 579
    //wonder woman 720
    //mystique 480
    //157	Captain Marvel
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
    </div>
  );
}

export default App;
