import React, { useState, useEffect } from "react";

function DisneyViewer() {
  function imageClick() {
    const mickey =
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png";
    document.getElementById("mickeyPic").src = mickey;
    // <img src="./_113249919_hi061718491.jpg" />;
    console.log("Clicked");
  }

  // const [disney, setDisney] = useState({});
  // const [mickeyId, setMickeyId] = useState();

  // function handleClickDisney() {
  //   setMickeyId("mickeymouse");
  // }

  // useEffect(() => {
  //   if (disney) {
  //     async function getDisney() {
  //       const res = await fetch(`https://api.disneyapi.dev/characters.json`, {
  //         headers: { accept: "application/json" },
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //       setDisney(data);
  //       // console.log(data.sprites.front_default);
  //       // console.log(disney);
  //     }
  //     getDisney();
  //   }
  // }, [mickeyId]);

  return (
    <div className="disney-viewer">
      <h1>Disney</h1>
      <button onClick={imageClick}>My favourte Disney character is...</button>
      <br></br>
      <br></br>
      <img
        id="mickeyPic"
        alt="I'm a traditionist"
        src="mickeyPic"
        width="250px"
        height="250px"
      ></img>
      {/* <button onClick={handleClickDisney}>
        My favourite Disney Character is...
      </button> */}
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
