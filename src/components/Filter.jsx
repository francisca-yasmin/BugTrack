import React from "react";
import estilo from '../styles/Filter.module.css'; //importa o css

// componente para filtrar por tipo de pokemon
const Filter = ({ types, selectedType, onSelectType }) => {
  return (
    <div>
      <select className={estilo.filtro} value={selectedType} onChange={(e) => onSelectType(e.target.value)}>
        <option value="all">Todos</option> {/*valor nulo enquanto não tem uma escolha feita pelo usuario*/}
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
