import React, { useState, useEffect } from "react";

function PokemonViewer() {
  const [pokemon, setPokemon] = useState({});
  const [charmanderId, setCharmanderId] = useState();

  function handleClickPokemon() {
    setCharmanderId(4);
  }

  useEffect(() => {
    if (pokemon) {
      async function getPokemon() {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${charmanderId}`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setPokemon(data);
        console.log(data.sprites.front_default);
        //console.log(pokemon);
      }
      getPokemon();
    }
  }, [charmanderId]);

  return (
    <div className="pokemon-viewer">
      <h1>Pokemon</h1>
      <button onClick={handleClickPokemon}>My favourite Pokemon is...</button>
      <h1>{pokemon?.species?.name}</h1>
      <img
        // alt="pokemon"
        src={pokemon?.sprites?.front_default}
        height={"300px"}
        width={"auto"}
      />
    </div>
  );
}

export default PokemonViewer;
