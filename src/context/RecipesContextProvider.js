import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import GetTitle from '../hooks/GetTitle';

function RecipesContextProvider({ children }) {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function setTitleState() {
    setIsLoading(true);
    const name = GetTitle();
    setTitle(name);
    setIsLoading(false);
  }

  const context = { title, setTitleState, isLoading };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

export default RecipesContextProvider;

RecipesContextProvider.propTypes = ({ children: PropTypes.node.isRequired });
