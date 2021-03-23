import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" data-testid="search-input" />
      <div className="search-bar-radio-btn">
        <label htmlFor="ingrediente">
          <input
            type="radio"
            name="filters"
            id="ingrediente"
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label htmlFor="nome">
          <input
            type="radio"
            name="filters"
            id="nome"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="primeira-letra">
          <input
            type="radio"
            name="filters"
            id="primeira-letra"
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </div>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </div>
  );
}

export default SearchBar;
