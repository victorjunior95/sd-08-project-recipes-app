import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainFoodContext from './MainFoodContext';
import requestMealRecipe from '../../services/API';

async function request() {
  const { meal: { strMealThumb, strMeal }} = await requestMealRecipe();
  
}

function FoodProvider({ children }) {
  const [mealThumbnail, setSearchInput] = useState('');
  const [mealName, setSearchType] = useState('');
  const handleMealName = ({ target }) => setSearchInput(target.value);
  const handleMealThumbnail = ({ target }) => setSearchType(target.value);

  const [foods, setFoods] = useState([]);

  const provide = {
    values: {
      mealName,
      mealThumbnail,
      foods,
    },
    functions: {
      handleMealName,
      handleMealThumbnail,
      setFoods,
    },
  };

  return (
    <MainFoodContext.Provider value={ provide }>
      {children}
    </MainFoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainFoodProvider;
