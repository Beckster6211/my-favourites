import React, { useState, useEffect } from "react";

function GamingViewer({ gamingId }) {
  const [gaming, setGaming] = useState({});

  useEffect(() => {
    if (gaming) {
      async function getGaming() {
        const res = await fetch(
          `https://www.amiiboapi.com/api/amiibo/?key=${gamingId}`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setGaming(data);
        // console.log(data.amiibo[14]);
        // console.log(data.amiibo[14].character);
        // console.log(data.amiibo[14].image);
      }
      getGaming();
    }
  }, [gamingId]);

  return (
    <div className="gaming-viewer">
      {/* <p>{gaming.amiibo[14].character}</p>
      <img
        alt="Yoshi"
        src={gaming.amiibo[14].image}
        height={"300px"}
        width={"auto"}
      /> */}
    </div>
  );
}

export default GamingViewer;
