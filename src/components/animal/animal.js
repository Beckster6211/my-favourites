import React, { useState, useEffect } from "react";
import "./animal.css";

function AnimalViewer() {
  function imageClick() {
    const tiger =
      "https://lh3.googleusercontent.com/proxy/qJs6pc-ushAnWQn26-RSb6DYm8_arwxUFrff8kGfGAPdWBQywq0VcYJjz4r9WDPqd2JkzwLHFIHgQACcaIWHe5A27izf6Aj3owIO5y5ZR75QKtNtwxBJkd0j-PUnVw";
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
      <br></br>
      <h1>Animal</h1>
      {/* <button onClick={imageClick}>Click me</button> */}
      <button onClick={imageClick}>My favourte animal is...</button>
      <br></br>
      <br></br>
      <img
        className="animalImage"
        id="tigerPic"
        alt="purrfect"
        src="tigerPic"
      ></img>

      {/* <img
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1675A/production/_113249919_hi061718491.jpg"
        width="150px"
        height="150px"
      /> */}
    </div>
  );
}

export default AnimalViewer;
