import React, { useState, useEffect } from "react";

function HeroViewer() {
  const [hero, setHero] = useState({});
  const [blackWidowId, setBlackWidowId] = useState();

  function handleClickHero() {
    setBlackWidowId(107);
    //black widow 107
    //scarlet witch 579
    //wonder woman 720
    //mystique 480
    //Captain Marvel 157
  }

  useEffect(() => {
    if (hero) {
      async function getHero() {
        const res = await fetch(
          `https://superheroapi.com/api/10224929409602023/${blackWidowId}`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setHero(data);
        // console.log(data.biography);
        // console.log(data.image.url);
        // console.log(data.name);
        // console.log(hero.biography);
        // console.log(hero.image.url);
        // console.log(hero.name);
      }
      getHero();
    }
  }, [blackWidowId]);

  return (
    <div className="hero-viewer">
      <h1>Hero</h1>
      <button onClick={handleClickHero}>My favourite Hero is...</button>
      {/* <p>{hero.biography.aliases[1]}</p>
      <img
        //alt="Black Widow"
        src={hero.image.url}
        height={"300px"}
        width={"auto"}
      />
      <p>
        AKA: {hero.name} <br></br>Only spider I will ever like 😀
      </p> */}
    </div>
  );
}

export default HeroViewer;
