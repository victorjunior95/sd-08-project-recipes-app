import React, { useContext, useState } from 'react';

import RecipesContext from '../context/RecipesContext';
import getMeals from '../services';

function SearchBar() {
  const [inputSearch, setInputSearch] = useState('');
  const [radioSearchType, setRadioSearchType] = useState('');

  const { setMeals } = useContext(RecipesContext);

  async function handleClick() {
    const { meals } = await getMeals(radioSearchType, inputSearch);
    if (!meals) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    setMeals(meals);
  }

  return (
    <div>
      <input
        type="text"
        value={ inputSearch }
        data-testid="search-input"
        onChange={ (e) => setInputSearch(e.target.value) }
      />
      <label htmlFor="ingredient-search">
        Ingrediente
        <input
          type="radio"
          name="radio-search-type"
          value="ingredient-search"
          onClick={ (e) => setRadioSearchType(e.target.value) }
          data-testid="ingredient-search-radio"
          id="ingredient-search"
        />
      </label>
      <label htmlFor="name-search">
        Nome
        <input
          type="radio"
          name="radio-search-type"
          value="name-search"
          onClick={ (e) => setRadioSearchType(e.target.value) }
          data-testid="name-search-radio"
          id="name-search"
        />
      </label>
      <label htmlFor="first-letter-search">
        Primeira letra
        <input
          type="radio"
          value="first-letter-search"
          onClick={ (e) => setRadioSearchType(e.target.value) }
          name="radio-search-type"
          data-testid="first-letter-search-radio"
          id="first-letter-search"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
