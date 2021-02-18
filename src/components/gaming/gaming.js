import React, { useState, useEffect } from "react";

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
        setGaming(data);
        console.log(data.amiibo[16]);
        console.log(data.amiibo[16].character);
        // console.log(data.amiibo[16].image);
      }
      getGaming();
    }
  }, [yoshiId]);

  return (
    <div className="gaming-viewer">
      <h1>Gaming</h1>
      <button onClick={handleClickGaming}>
        My favourite Gaming Character is...{" "}
      </button>
      {/* <p>{gaming.amiibo[16].character}</p> */}
      {/* <img
        //alt="Yoshi"
        src={gaming.amiibo[16].image}
        height={"300px"}
        width={"auto"}
      /> */}
    </div>
  );
}

export default GamingViewer;
