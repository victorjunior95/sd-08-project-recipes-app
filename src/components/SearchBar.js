import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import RecipesContext from '../context/RecipesContext';
import { getMeals, getCocktails } from '../services';

function SearchBar({ type }) {
  const [inputSearch, setInputSearch] = useState('');
  const [radioSearchType, setRadioSearchType] = useState('');

  const { setMeals, setDrinks, isShow } = useContext(RecipesContext);

  async function handleClick() {
    if (radioSearchType === 'first-letter-search' && inputSearch.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      if (type === 'meals') {
        const { meals } = await getMeals(radioSearchType, inputSearch);
        if (!meals) {
          alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else {
          setMeals(meals);
        }
      }
      if (type === 'cocktails') {
        const { drinks } = await getCocktails(radioSearchType, inputSearch);
        if (!drinks) {
          alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else {
          setDrinks(drinks);
        }
      }
    }
  }
  console.log(`${isShow} é o valor de isShow em SearchBar`);
  if (isShow) {
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
  return ('');
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
