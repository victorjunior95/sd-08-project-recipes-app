import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import { requestMealRecipe } from '../../services/API';

function FoodProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');
  const handleSearchInput = ({ target }) => setSearchInput(target.value);
  const handleSearchType = ({ target }) => setSearchType(target.value);

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestMealRecipe();
      setFoods(result.meals);
    };
    fetchData();
  }, []);

  const [detailFoods, setDetailsFoods] = useState([]);
  const [recomendations, setRecomendations] = useState([]);

  const provide = {
    values: {
      searchInput,
      searchType,
      foods,
      detailFoods,
      recomendations,
    },
    functions: {
      handleSearchInput,
      handleSearchType,
      setFoods,
      setDetailsFoods,
      setRecomendations,
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
