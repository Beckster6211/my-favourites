import React, { useState, useEffect } from "react";

function DisneyViewer() {
  const [disney, setDisney] = useState({});
  const [mickeyId, setMickeyId] = useState();

  function handleClickDisney() {
    setMickeyId("mickeymouse");
  }

  useEffect(() => {
    if (disney) {
      async function getDisney() {
        const res = await fetch(`https://api.disneyapi.dev/characters.json`, {
          headers: { accept: "application/json" },
        });
        const data = await res.json();
        console.log(data);
        setDisney(data);
        // console.log(data.sprites.front_default);
        // console.log(disney);
      }
      getDisney();
    }
  }, [mickeyId]);

  return (
    <div className="disney-viewer">
      <h1>Disney</h1>
      <button onClick={handleClickDisney}>
        My favourite Disney Character is...
      </button>
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
