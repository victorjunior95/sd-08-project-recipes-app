import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './DrinkContext';
import {
  requestDrinkRecipe,
  requestDrinksCategory,
  requestDrinksByCategory,
} from '../../services/API';

function DrinkProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');
  const handleSearchInput = ({ target }) => setSearchInput(target.value);
  const handleSearchType = ({ target }) => setSearchType(target.value);
  const [currentCategory, setCurrentCategory] = useState('');

  const [drinks, setDrinks] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const handleFilteredDrinks = async ({ target }) => {
    const categoryName = target.innerText;
    if (categoryName === 'All') return setFilteredDrinks([]);
    if (filteredDrinks.length === 0 || currentCategory !== categoryName) {
      setCurrentCategory(categoryName);
      const result = await requestDrinksByCategory(categoryName);
      setFilteredDrinks(result.drinks);
    } else {
      setFilteredDrinks([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestDrinkRecipe();
      setDrinks(result.drinks);
    };
    fetchData();
  }, []);

  const [detailDrinks, setDetailsDrinks] = useState([]);
  const [recomendations, setRecomendations] = useState([]);

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
      detailDrinks,
      recomendations,
    },
    functions: {
      handleSearchInput,
      handleSearchType,
      handleFilteredDrinks,
      setDrinks,
      setDetailsDrinks,
      setRecomendations,
    },
  };

  return (
    <FoodContext.Provider value={ provide }>{children}</FoodContext.Provider>
  );
}

DrinkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinkProvider;
