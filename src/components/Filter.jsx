import React from "react";
import estilo from '../styles/Filter.module.css';

const Filter = ({ types, selectedType, onSelectType }) => {
  return (
    <div>
      <select className={estilo.filtro} value={selectedType} onChange={(e) => onSelectType(e.target.value)}>
        <option value="all">Todos</option>
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
