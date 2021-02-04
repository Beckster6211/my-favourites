import React, { useState, useEffect } from "react";

function PokemonViewer({ pokemonId }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (pokemon) {
      async function getPokemon() {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setPokemon(data);
        console.log(data.sprites.front_default);
        console.log(pokemon);
      }
      getPokemon();
    }
  }, [pokemonId]);

  return (
    <div className="pokemon-viewer">
      <p>{pokemon?.species?.name}</p>
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
