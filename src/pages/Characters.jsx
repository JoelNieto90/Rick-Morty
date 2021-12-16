import React from 'react';
import "../styles/Characters.scss";
import letters from "../assets/Characters.png";

const Characters = () => {
  return (
    <div className="Chars">
      <img className="Chars" src={letters} alt="letters" />
      <p>Table</p>
    </div>
  )
}

export default Characters;