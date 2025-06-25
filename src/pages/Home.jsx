// assets/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Card from "../components/Card"; //import de card para mostrar o pokemon
import Filter from "../components/Filter"; // componente que filtra os pokemons
import estilo from '../styles/Home.module.css'; //css da pagina home

const Home = () => {
  //estado que pega os pokemons, filtros e os tipos de pokemons
  const [pokemons, setPokemons] = useState([]); 
  const [filtered, setFiltered] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150"); //api de pokemon com limite de 150 pokemons para carregar
      const data = await res.json();
      const details = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          return await res.json();
        })
      );
      setPokemons(details);
      setFiltered(details);
      const allTypes = new Set(details.flatMap((p) => p.types.map(t => t.type.name)));
      setTypes([...allTypes]);
    };

    fetchPokemons(); //chama minha função
  }, []);

  useEffect(() => {
    if (selectedType === "all") {
      setFiltered(pokemons);
    } else {
      setFiltered(pokemons.filter(p => p.types.some(t => t.type.name === selectedType)));
    }
  }, [selectedType, pokemons]);

  return (
    <div>
      <Filter types={types} selectedType={selectedType} onSelectType={setSelectedType} />
      <div className={estilo.pokemon_list}>
        {filtered.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
