import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [email, setEmail] = useState('');
  const handleEmail = ({ target }) => setEmail(target.value);

  const [cocktails, setCocktails] = useState({});
  const [meals, setMeals] = useState({});

  const [doneRecipes, setDoneRecipes] = useState([]);

  const provide = {
    values: {
      email,
    },
    functions: {
      setEmail,
      handleEmail,
      setCocktails,
      setMeals,
      setDoneRecipes,
    },
    inProgressRecipes: {
      cocktails,
      meals,
    },
    doneRecipes,
  };
  return (
    <GlobalContext.Provider value={ provide }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
