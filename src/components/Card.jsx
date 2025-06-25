
import React from "react";
import estilo from "../styles/Card.module.css";

const Card = ({ pokemon }) => {
  return (
    <div className={estilo.card}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.types.map(t => t.type.name).join(", ")}</p>
    </div>
  );
};

export default Card;
