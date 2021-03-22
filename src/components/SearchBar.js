import React from 'react';

function Search() {
  return (
    <div>
      <label htmlFor="search">
        Search
        <input
          type="text"
          id="search"
          name="search"
          data-testid="search-input"
          value="search"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="search-radio">
        Ingredientes
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="search-radio"
          id="search-radio"
          value="ingredientes"
        />
      </label>
      <label htmlFor="name-search-radio">
        Nome
        <input
          type="radio"
          data-testid="name-search-radio"
          name="name-search-radio"
          id="name-search-radio"
          value="nome"
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="first-letter-search-radio"
          id="first-letter-search-radio"
          value="letra"
        />
      </label>
      <button
        data-testid="exec-search-btn"
        type="submit"
      >
        Pesquisar
      </button>
    </div>
  );
}

export default Search;
