import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import GetTitle from '../hooks/GetTitle';

function RecipesContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  function setTitleState() {
    setIsLoading(true);
    const name = GetTitle();
    setTitle(name);
    setIsLoading(false);
  }

  const context = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    title,
    setTitleState,
    isLoading,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipesContextProvider;
