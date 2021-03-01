import React, { useState, useEffect } from "react";
import "./hero.css";

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
      <div>
        <br></br>
        <img
          className="dcLogo"
          src="./399c4ddbb8b0bca6150195633b4acf37.png"
          alt="DC Logo"
        />
        &nbsp; &nbsp;&nbsp;
        <h1 className="hero">Hero</h1>
        &nbsp; &nbsp;&nbsp;
        <img
          className="marvelLogo"
          src="./marvel-logo-header.jpg"
          alt="Marvel Logo"
        />
      </div>
      <div>
        <button onClick={handleClickHero}>My favourite Hero is...</button>
        <h1 className="blackWidowText">{hero?.biography?.aliases[1]}</h1>
        <img
          className="blackWidow"
          //alt="Black Widow"
          src={hero?.images?.md}
        />
        <h1 className="blackWidowText">
          AKA... {hero?.name} <br></br>Only spider I will ever like 😀
        </h1>
        <br></br>
      </div>
    </div>
  );
}

export default HeroViewer;
