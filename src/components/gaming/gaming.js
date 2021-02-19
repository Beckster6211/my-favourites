import React, { useState, useEffect } from "react";
import "./gaming.css";

function GamingViewer() {
  const [gaming, setGaming] = useState({});
  const [yoshiId, setYoshiId] = useState();

  function handleClickGaming() {
    setYoshiId(0x0003);
  }

  useEffect(() => {
    if (gaming) {
      async function getGaming() {
        const res = await fetch(
          `https://www.amiiboapi.com/api/amiibo/?key=${yoshiId}`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setGaming(data.amiibo);
        console.log(data.amiibo[16]);
        console.log(data.amiibo[16].character);
        // console.log(data.amiibo[16].image);
      }
      getGaming();
    }
  }, [yoshiId]);

  return (
    <div className="gaming-viewer">
      <br></br>
      <h1>Gaming</h1>
      <button onClick={handleClickGaming}>
        My favourite Gaming Character is...
      </button>
      <h1 className="yoshiText">{gaming[16]?.character}</h1>
      <img
        className="yoshiImage"
        //alt="Yoshi"
        src={gaming[16]?.image}
      />
    </div>
  );
}

export default GamingViewer;
