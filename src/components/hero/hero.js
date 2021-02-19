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
        <img
          className="dcLogo"
          src="https://i.pinimg.com/originals/39/9c/4d/399c4ddbb8b0bca6150195633b4acf37.png"
        />
        &nbsp; &nbsp;
        <h1 className="hero">Hero</h1>
        &nbsp; &nbsp;
        <img
          className="marvelLogo"
          src="https://static3.srcdn.com/wordpress/wp-content/uploads/2019/12/marvel-logo-header.jpg"
        />
      </div>
      <div className="blackWidowSymbol">
        <button onClick={handleClickHero}>My favourite Hero is...</button>
        <h1>{hero?.biography?.aliases[1]}</h1>

        <img
          className="blackWidow"
          //alt="Black Widow"
          src={hero?.images?.md}
        />
        <h3>
          AKA: ... {hero?.name} <br></br>Only spider I will ever like 😀
        </h3>
      </div>
    </div>
  );
}

export default HeroViewer;
