import React, { useState, useEffect } from "react";

function GamingViewer({ gamingId }) {
  const [gaming, setGaming] = useState({});

  useEffect(() => {
    if (gaming) {
      async function getGaming() {
        const res = await fetch(
          `https://www.amiiboapi.com/api/amiibo/?character?name=${gamingId}`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setGaming(data);
        //console.log(data.sprites.front_default);
        //console.log(pokemon);
      }
      getGaming();
    }
  }, [gamingId]);

  return (
    <div className="pokemon-viewer">
      {/* <p>{pokemon?.species?.name}</p>
      <img
        // alt="pokemon"
        src={pokemon?.sprites?.front_default}
        height={"300px"}
        width={"auto"}
      /> */}
    </div>
  );
}

export default GamingViewer;
