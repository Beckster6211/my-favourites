// function HeroViewer() {
//   const [hero, setHero] = useState({});
//   const [blackWidowId, setBlackWidowId] = useState();

//   function handleClickHero() {
//     setBlackWidowId("107");
//     //black widow 107
//     //scarlet witch 579
//     //wonder woman 720
//     //mystique 480
//     //Captain Marvel 157
//   }

//   useEffect(() => {
//     if (hero) {
//       async function getHero() {
//         const res = await fetch(
//           `https://akabab.github.io/superhero-api/api/id/${blackWidowId}.json`,
//           {
//             headers: { accept: "application/json" },
//           }
//         );
//         const data = await res.json();
//         console.log(data);
//         setHero(data);
//         // console.log(data.biography);
//         // console.log(data.images.md);
//         // console.log(data.name);
//         // console.log(hero.biography);
//         // console.log(hero.image);
//         // console.log(hero.name);
//       }
//       getHero();
//     }
//   }, [blackWidowId]);

//   return (
//     <div className="hero-viewer">
//       <h1>Hero</h1>
//       <button onClick={handleClickHero}>My favourite Hero is...</button>
//       <h1>{hero?.biography?.aliases[1]}</h1>

//       <img
//         //alt="Black Widow"
//         src={hero?.images?.md}
//         height={"300px"}
//         width={"auto"}
//       />
//       <p>
//         AKA: ... {hero?.name} <br></br>Only spider I will ever like 😀
//       </p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

function Food() {
  const [food, setFood] = useState({});
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
    if (food) {
      async function getFood() {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch/`,
          //&apiKey=YOUR-API-KEY
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setFood(data);
        // console.log(data.biography);
        // console.log(data.images.md);
        // console.log(data.name);
        // console.log(hero.biography);
        // console.log(hero.image);
        // console.log(hero.name);
      }
      getFood();
    }
  }, []);

  // return (
  //   <div className="hero-viewer">
  //     <h1>Hero</h1>
  //     <button onClick={handleClickHero}>My favourite Hero is...</button>
  //     <h1>{hero?.biography?.aliases[1]}</h1>

  //     <img
  //       //alt="Black Widow"
  //       src={hero?.images?.md}
  //       height={"300px"}
  //       width={"auto"}
  //     />
  //     <p>
  //       AKA: ... {hero?.name} <br></br>Only spider I will ever like 😀
  //     </p>
  //   </div>
  // );

  return (
    <div>
      <h1>Food</h1>
    </div>
  );
}

export default Food;
