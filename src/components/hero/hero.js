import React, { useState, useEffect } from "react";

function HeroViewer({ heroId }) {
  const [hero, setHero] = useState({});

  useEffect(() => {
    if (hero) {
      async function getHero() {
        const res = await fetch(
          `https://superheroapi.com/api/10224929409602023/${heroId}`,
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
        // console.log(hero.biography[4]);
        // console.log(hero.image.url);
        // console.log(hero.name);
      }
      getHero();
    }
  }, [heroId]);

  return (
    <div className="hero-viewer">
      <p>{hero.biography.aliases[1]}</p>
      <img
        alt="Black Widow"
        src={hero.image.url}
        height={"300px"}
        width={"auto"}
      />
      <p>AKA: {hero.name}</p>
    </div>
  );
}

export default HeroViewer;
