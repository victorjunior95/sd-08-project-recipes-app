import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import {
  requestMealRecipe,
  requestFoodCategory,
  requestMealsByCategory,
} from '../../services/API';

function FoodProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');
  const handleSearchInput = ({ target }) => setSearchInput(target.value);
  const handleSearchType = ({ target }) => setSearchType(target.value);
  const [currentCategory, setCurrentCategory] = useState('');

  const [foods, setFoods] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const handleFilteredMeals = async ({ target }) => {
    const categoryName = target.innerText;
    if (categoryName === 'All') return setFilteredMeals([]);
    if (filteredMeals.length === 0 || currentCategory !== categoryName) {
      setCurrentCategory(categoryName);
      const result = await requestMealsByCategory(categoryName);
      setFilteredMeals(result.meals);
    } else {
      setFilteredMeals([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestMealRecipe();
      setFoods(result.meals);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestFoodCategory();
      setFoodCategory(result.meals);
    };
    fetchData();
  }, []);

  const provide = {
    values: {
      searchInput,
      searchType,
      filteredMeals,
      foods,
      foodCategory,
    },
    functions: {
      handleFilteredMeals,
      handleSearchInput,
      handleSearchType,
      setFoods,
    },
  };

  return (
    <FoodContext.Provider value={ provide }>
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodProvider;
