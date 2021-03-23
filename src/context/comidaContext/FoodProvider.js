import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import { requestMealRecipe, requestFoodCategory } from '../../services/API';

function FoodProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');
  const handleSearchInput = ({ target }) => setSearchInput(target.value);
  const handleSearchType = ({ target }) => setSearchType(target.value);

  const [foods, setFoods] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);

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
      foods,
      foodCategory,
    },
    functions: {
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
