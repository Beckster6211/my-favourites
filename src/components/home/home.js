import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="homePage">
      <h1 className="home">🏠 Home 🏠</h1>
      <h2>Hi 👋</h2>
      <p className="text">
        This is something I created that started initially as something to
        practice fetch, useEffect and react and morphed into something more fun.
      </p>
      <br></br>
      <br></br>
      <p className="text">
        If you want to get to know some quirky things about me then visit the
        different pages in the nav 😃
      </p>
      <br></br>
      <br></br>
      <p className="text">👍 Hope you like it I had fun making it </p>
    </div>
  );
}

export default Home;
