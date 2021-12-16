import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import logo from "../assets/logorick.png"

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar_Img">
        <Link to="/">
          <img className="NavBar_Img--picture" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="NavBar_Link">
        <Link to="/">HISTORY</Link>
        <Link to="/">TRAILER</Link>
        <Link to="/">EPISODES</Link>
        <Link to="/characters">CHARACTERS</Link>
      </div>
    </nav>
  );
};

export default NavBar;