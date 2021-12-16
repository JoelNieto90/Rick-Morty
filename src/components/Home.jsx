import React from "react";
import Card from "./Card";
import "./styles/Home.scss";
import logo from "./assets/logo.png";
import RickMorty from "./assets/rick&morty.png";
import photo1 from "./assets/EpisodiosWall.jpg";
import photo2 from "./assets/wallpapersPers.jpg";

const Home = () => {
  return (
    <main className="Home">
      <section className="Home_Img">
        <img className="Home_Img--picture1" src={logo} alt="Logo" />
        <img className="Home_Img--picture2" src={RickMorty} alt="RickMorty" />
      </section>
      <section className="Home_Cards">
        <Card photo={photo1} text="Characters" link="characters" />
        <Card photo={photo2} text="Episodes" link="espisodes" />
      </section>
      <section className="Home_Text">
        <p>
          Welcome to the <br />
          Rick and Morty page.
        </p>
      </section>
    </main>
  );
};

export default Home;
