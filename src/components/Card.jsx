import React from 'react';
import { Link } from "react-router-dom";
import "./styles/Card.scss";

function Card({photo, text, link}) {
  return (
    <section className="Card">
    <Link to={link}>
      <img className="Card_Img" src={photo} alt="Foto" />
      <div className="Card_Text">
        <span>{text}</span>
      </div>
    </Link>
    </section>
  );
}

export default Card;