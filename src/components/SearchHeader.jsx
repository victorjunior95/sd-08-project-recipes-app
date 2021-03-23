import React from 'react';

function SearchHeader() {
  return (
    <form>
      <input
        type="text"
        placeholder="Buscar Receita"
        data-testid="search-input"
      />
      <label htmlFor="ingredient">
        Ingrediente
        <input
          type="radio"
          name="search"
          data-testid="ingredient-search-radio"
          value="ingredient"
        />
      </label>
      <label htmlFor="name">
        Nome
        <input
          type="radio"
          name="search"
          data-testid="name-search-radio"
          value="name"
        />
      </label>
      <label htmlFor="first-letter">
        Primeira letra
        <input
          type="radio"
          name="search"
          data-testid="first-letter-search-radio"
          value="first-letter"
        />
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </form>
  );
}

export default SearchHeader;
