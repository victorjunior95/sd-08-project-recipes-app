import React, { useState, useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function Search() {
  const [textInput, setTextInput] = useState('');
  const [radio, setRadio] = useState();
  const { getAPI } = useContext(RecipesContext);
  const handleChange = ({ target }) => {
    setRadio(target.value);
  };
  return (
    <div>
      <label htmlFor="search">
        Search
        <input
          type="text"
          id="search"
          name="search"
          data-testid="search-input"
          value={ textInput }
          onChange={ ({ target }) => setTextInput(target.value) }
        />
      </label>
      <label htmlFor="search-radio">
        Ingredientes
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="radio"
          id="search-radio"
          value="ingredient"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="name-search-radio">
        Nome
        <input
          type="radio"
          data-testid="name-search-radio"
          name="radio"
          id="name-search-radio"
          value="name"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="radio"
          id="first-letter-search-radio"
          value="firstLetter"
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="exec-search-btn"
        type="submit"
        onClick={ () => getAPI(radio, textInput) }
      >
        Pesquisar
      </button>
    </div>
  );
}

export default Search;
