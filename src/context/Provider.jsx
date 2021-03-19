import React, { useState } from 'react';
import contextRecipes from './Context';
import App from '../App';
// import PropTypes from 'prop-types';

function RecipesProvider() {
  const [mealsToken, setMealsToken] = useState(1);
  const [cocktailsToken, setCocktailsToken] = useState(1);

  function saveLocalStorage() {
    localStorage.setItem('mealsToken', mealsToken);
    localStorage.setItem('cocktailsToken', cocktailsToken);
  }
  const state = {
    saveLocalStorage,
    setMealsToken,
    setCocktailsToken,
  };
  return (
    <contextRecipes.Provider value={ state }>
      <App />
    </contextRecipes.Provider>
  );
}
// .propTypes = {};

export default RecipesProvider;
