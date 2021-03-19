import React from 'react';
import RecipesContext from './RecipesContext';

function RecipesContextProvider ({ children }) {
  const context = {};

  return (
    <RecipesContext.Provider value={context} >
      { children }
    </RecipesContext.Provider>
  );
}

export default RecipesContextProvider;
