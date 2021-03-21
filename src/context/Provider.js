import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [mealsToken, setMealsToken] = useState(1);
  const [cocktailsToken, setCocktailsToken] = useState(1);
  const [user, setUser] = useState({
    email: '',
  });

  useEffect(() => {
    function handleLocalStorage() {
      localStorage.setItem('mealsToken', mealsToken);
      localStorage.setItem('cocktailsToken', cocktailsToken);
      localStorage.setItem('user', JSON.stringify(user));
    }
    handleLocalStorage();
  }, [user, mealsToken, cocktailsToken]);

  const data = {
    setUser,
    setMealsToken,
    setCocktailsToken,
  };

  return (
    <Context.Provider value={ data }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
