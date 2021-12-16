import { React, useEffect, useState } from "react";
import getDataFromAPI from "../services/getDataCharacters";
import "../styles/Characters.scss";
import letters from "../assets/Characters.png";

const Characters = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((data) => {
      setChars(data);
    });
  }, []);

  return (
    <div className="Chars">
      <img className="Chars" src={letters} alt="letters" />
      <p>Table</p>
      <span>{console.log(chars)}</span>
    </div>
  )
}

export default Characters;