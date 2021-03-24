import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [mealsToken, setMealsToken] = useState(1);
  const [cocktailsToken, setCocktailsToken] = useState(1);
  const [user, setUser] = useState({
    email: '',
  });
  const [searchParams, setSearchParams] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      localStorage.setItem('mealsToken', mealsToken);
      localStorage.setItem('cocktailsToken', cocktailsToken);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user, mealsToken, cocktailsToken]);

  const data = {
    setUser,
    setMealsToken,
    setCocktailsToken,
  };

  return (
    <Context.Provider
      value={ { data, searchParams, setSearchParams, inputValue, setInputValue } }
    >
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
