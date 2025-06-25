import React from "react";
import estilo from '../styles/Filter.module.css'; // importa o css

// componente para filtrar por tipo de pokemon
const Filter = ({ types, selectedType, onSelectType, searchTerm, onSearch }) => {
  return (
    <div className={estilo.filtrosContainer}> {/* container geral */}
      
      {/* filtro por tipo */}
      <select
        className={estilo.filtro}
        value={selectedType}
        onChange={(e) => onSelectType(e.target.value)}
      >
        <option value="all">todos</option> {/*valor nulo enquanto não tem uma escolha feita pelo usuario*/}
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      {/* filtro por nome */}
      <input
        className={estilo.search}
        type="text"
        placeholder="buscar por nome"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Filter;

