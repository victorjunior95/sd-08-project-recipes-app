import React, { useState, useEffect } from 'react';
import contextRecipes from './Context';
import App from '../App';
// import PropTypes from 'prop-types';

function RecipesProvider() {
  const [mealsToken, setMealsToken] = useState(1);
  const [cocktailsToken, setCocktailsToken] = useState(1);
  const [user, setUser] = useState({
    email: '',
  });

  useEffect(() => {
    function saveLocalStorage() {
      localStorage.setItem('mealsToken', mealsToken);
      localStorage.setItem('cocktailsToken', cocktailsToken);
      localStorage.setItem('user', JSON.stringify(user));
    }
    saveLocalStorage();
  }, [user, mealsToken, cocktailsToken]);

  const state = {
    setUser,
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
