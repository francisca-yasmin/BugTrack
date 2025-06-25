
import React from "react";
import estilo from "../styles/Card.module.css"; //importa o css do card

//componente de card para receber o pokemon
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
