import React, { useState, useEffect } from "react";

function AnimalViewer() {
  const [animal, setAnimal] = useState({});
  const [tigerId, setTigerId] = useState();

  function handleClickAnimal() {
    setTigerId("bengal-tiger");
  }

  useEffect(() => {
    if (animal) {
      async function getAnimal() {
        const res = await fetch(
          `https://swe-endangered-animals.appspot.com/all_animal_data`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setAnimal(data);
        // console.log(data.amiibo[16]);
        // console.log(data.amiibo[16].character);
        // console.log(data.amiibo[16].image);
      }
      getAnimal();
    }
  }, [tigerId]);

  return (
    <div className="animal-viewer">
      <h1>Animal</h1>
      <button onClick={handleClickAnimal}>My favourite animal is...</button>
      {/* <p>{gaming[16]?.character}</p>
      <img
        //alt="Yoshi"
        src={gaming[16]?.image}
        height={"300px"}
        width={"auto"}
      /> */}
    </div>
  );
}

export default AnimalViewer;
