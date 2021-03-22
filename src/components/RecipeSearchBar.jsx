import React from 'react';

export default function RecipeSearchBar() {
  return (    
    <form action="">
      <label htmlFor="search-input">
        <input
          placeholder="Buscar receita"
          type="text"
          data-testid="search-input"
          id="search-input"
        />
      </label>
      <label htmlFor="ingrdient-search-radio">
        Ingrediente
        <input
          data-testid="ingredient-search-radio"
          type="radio"
        />
      </label>
      <label htmlFor="name-search-radio">
        Nome
        <input
          data-testid="name-search-radio"
          type="radio"
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        Primeira Letra
        <input
          data-testid="first-letter-search-radio"
          type="radio"
        />
      </label>
      <button type="submit" data-testid="exec-search-btn">
        Pesquisar
      </button>
    </form>  
  );
}
