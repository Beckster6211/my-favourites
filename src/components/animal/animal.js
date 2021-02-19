import React, { useState, useEffect } from "react";

function AnimalViewer() {
  function imageClick() {
    const tiger =
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/1675A/production/_113249919_hi061718491.jpg";
    document.getElementById("tigerPic").src = tiger;
    // <img src="./_113249919_hi061718491.jpg" />;
    console.log("Clicked");
  }

  // const [animal, setAnimal] = useState({});
  // const [tigerId, setTigerId] = useState();

  // function handleClickAnimal() {
  //   setTigerId("bengal-tiger");
  // }

  // useEffect(() => {
  //   if (animal) {
  //     async function getAnimal() {
  //       const res = await fetch(
  //         `https://swe-endangered-animals.appspot.com/all_animal_data`,
  //         {
  //           headers: { accept: "application/json" },
  //         }
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //       setAnimal(data);
  //       // console.log(data.amiibo[16]);
  //       // console.log(data.amiibo[16].character);
  //       // console.log(data.amiibo[16].image);
  //     }
  //     getAnimal();
  //   }
  // }, [tigerId]);

  return (
    <div className="animal-viewer">
      <h1>Animal</h1>
      {/* <button onClick={imageClick}>Click me</button> */}
      <img id="tigerPic" src="tigerPic" width="150px" height="150px"></img>
      <button onClick={imageClick}>Tiger Pic</button>
      {/* <img
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1675A/production/_113249919_hi061718491.jpg"
        width="150px"
        height="150px"
      /> */}
    </div>
  );
}

export default AnimalViewer;
