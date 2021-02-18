import React, { useState, useEffect } from "react";

function HeroViewer() {
  const [hero, setHero] = useState({});
  const [blackWidowId, setBlackWidowId] = useState();

  function handleClickHero() {
    setBlackWidowId("107");
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
          `https://akabab.github.io/superhero-api/api/id/${blackWidowId}.json`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setHero(data);
        // console.log(data.biography);
        // console.log(data.images.md);
        // console.log(data.name);
        // console.log(hero.biography);
        // console.log(hero.image);
        // console.log(hero.name);
      }
      getHero();
    }
  }, [blackWidowId]);

  return (
    <div className="hero-viewer">
      <h1>Hero</h1>
      <button onClick={handleClickHero}>My favourite Hero is...</button>
      <h1>{hero?.biography?.aliases[1]}</h1>
      <img
        //alt="Black Widow"
        src={hero?.images?.md}
        height={"300px"}
        width={"auto"}
      />
      <p>Also Known As : {hero?.name}</p>
      <p>Only spider I will ever like 😀</p>
    </div>
  );
}

export default HeroViewer;
