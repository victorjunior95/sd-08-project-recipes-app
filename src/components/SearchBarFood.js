import React, { useContext } from 'react';
import FoodContext from '../context/comidaContext/FoodContext';
import {
  SearchMealByIngredient,
  SearchMealByName,
  SearchMealByFirstLetter,
} from '../services/API';

function SearchBarFood() {
  const {
    values: {
      searchInput,
      searchType,
    },
    functions: {
      handleSearchInput,
      handleSearchType,
      setFoods,
    },
  } = useContext(FoodContext);

  const requestAPI = async () => {
    if (searchType === 'first-letter-search' && searchInput.length > 1) {
      return <p>Sua busca deve conter somente 1 (um) caracter</p>;
    }
    if (searchType === 'ingredient-search') {
      const response = await SearchMealByIngredient(searchInput);
      return setFoods(response);
    }
    if (searchType === 'name-search') {
      const response = await SearchMealByName(searchInput);
      return setFoods(response);
    }
    if (searchType === 'first-letter-search') {
      const response = await SearchMealByFirstLetter(searchInput);
      return setFoods(response);
    }
  };

  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
        value={ searchInput }
        onChange={ handleSearchInput }
      />
      <label htmlFor="ingredient-search">
        <input
          id="ingredient-search"
          type="radio"
          name="search"
          data-testid="ingredient-search-radio"
          onChange={ handleSearchType }
          value="ingredient-search"
        />
        Buscar por ingrediente
      </label>
      <label htmlFor="name-search">
        <input
          id="name-search"
          type="radio"
          name="search"
          data-testid="name-search-radio"
          onChange={ handleSearchType }
          value="name-search"
        />
        Buscar por nome
      </label>
      <label htmlFor="first-letter-search">
        <input
          id="first-letter-search"
          type="radio"
          name="search"
          data-testid="first-letter-search-radio"
          onChange={ handleSearchType }
          value="first-letter-search"
        />
        Buscar pela primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ requestAPI }
      >
        Procurar
      </button>
    </section>
  );
}

export default SearchBarFood;
