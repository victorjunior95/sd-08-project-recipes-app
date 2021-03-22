import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './DrinkContext';

function DrinkProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');
  const handleSearchInput = ({ target }) => setSearchInput(target.value);
  const handleSearchType = ({ target }) => setSearchType(target.value);

  const [drinks, setDrinks] = useState([]);

  const provide = {
    values: {
      searchInput,
      searchType,
      drinks,
    },
    functions: {
      handleSearchInput,
      handleSearchType,
      setDrinks,
    },
  };
  return (
    <FoodContext.Provider value={ provide }>
      {children}
    </FoodContext.Provider>
  );
}

DrinkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinkProvider;
