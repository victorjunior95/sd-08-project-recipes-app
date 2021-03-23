import React from 'react';
import { filterSteps } from '../../core';
// import api from '../../services';
import data from './data';

const DrnkRecipeIngredients = () => {
  const recipe = [data[1]];
  // const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // const recipe = meals[Object.keys(meals)[0]];
  console.log(recipe);
  return (
    <div>
      <div>
        <p>Ingredients</p>
        <ol>
          {filterSteps(recipe[0])}
        </ol>
      </div>
    </div>
  );
};

export default DrnkRecipeIngredients;
