import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './DrinkContext';
import { requestDrinkRecipe, requestDrinksCategory } from '../../services/API';

function DrinkProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');
  const handleSearchInput = ({ target }) => setSearchInput(target.value);
  const handleSearchType = ({ target }) => setSearchType(target.value);

  const [drinks, setDrinks] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [filteredDrinks, setfilteredDrinks] = useState('');
  const handleFilteredDrinks = ({ target }) => setfilteredDrinks(target.innerText);

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestDrinkRecipe();
      setDrinks(result.drinks);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestDrinksCategory();
      setDrinksCategory(result.drinks);
    };
    fetchData();
  }, []);

  const provide = {
    values: {
      searchInput,
      searchType,
      drinks,
      drinksCategory,
      filteredDrinks,
    },
    functions: {
      handleSearchInput,
      handleSearchType,
      setDrinks,
      handleFilteredDrinks,
    },
  };
  console.log(filteredDrinks);

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
