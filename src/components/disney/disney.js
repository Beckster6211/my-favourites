import React, { useState, useEffect } from "react";

function DisneyViewer({ disneyId }) {
  const [disney, setDisney] = useState({});

  //   useEffect(() => {
  //     if (disney) {
  async function getDisney() {
    const res = await fetch(
      `https://api.disneyapi.dev/characters/mickey mouse`,
      {
        headers: { accept: "application/json" },
      }
    );
    const data = await res.json();
    console.log(data);
    setDisney(data);
    // console.log(data.sprites.front_default);
    // console.log(disney);
  }
  getDisney();
  //     }
  //   }, [disneyId]);

  return (
    <div className="disney-viewer">
      {/* <p>{pokemon?.species?.name}</p>
      <img
        //alt="pokemon"
        src={pokemon?.sprites?.front_default}
        height={"300px"}
        width={"auto"}
      /> */}
    </div>
  );
}

export default DisneyViewer;
