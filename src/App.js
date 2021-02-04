import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "./components/pokemon/pokemon";

function App() {
  const [id, setId] = useState();

  function handleClick() {
    setId(4);
  }

  return (
    <div className="App">
      <br></br>
      <br></br>
      <button onClick={handleClick}>My favourite Pokemon is...</button>
      <PokemonViewer pokemonId={id} />
    </div>
  );
}

export default App;
