import React, { useState, useEffect } from "react";
import "./pokemon.css";

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
      <br></br>
      <img
        className="pokemonLogo"
        src="./1200px-International_Pokémon_logo.svg.webp"
        alt="Pokemon logo"
      ></img>
      <br></br>
      <br></br>
      <button onClick={handleClickPokemon}>My favourite Pokemon is...</button>
      <br></br>
      <br></br>
      <h1 className="charmanderName">{pokemon?.species?.name}</h1>
      <img
        className="charmander"
        // alt="pokemon"
        src={pokemon?.sprites?.front_default}
      />
    </div>
  );
}

export default PokemonViewer;
