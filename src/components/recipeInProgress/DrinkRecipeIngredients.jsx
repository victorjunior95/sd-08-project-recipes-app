import React from 'react';
import { filterIngAndMeasuresList } from '../../core';
// import api from '../../services';
import data from './data';

const DrnkRecipeIngredients = () => {
  const recipe = [data[1]];
  // const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // const recipe = meals[Object.keys(meals)[0]];
  console.log(recipe);
  const steps = filterIngAndMeasuresList(recipe[0]);
  return (
    <div>
      <div>
        <p>Ingredients</p>
        <ol>
          {steps[0].map((ingredientsString, indx) => (
            <li key={ indx } data-testid={ `${indx}-ingredient-step` }>
              <label htmlFor={ `step-${indx}` }>
                <input type="checkbox" name={ `step-${indx}` } id={ `step-${indx}` } />
              </label>
              <p>
                {ingredientsString[1]}
                {' - '}
                {steps[1][indx][1]}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DrnkRecipeIngredients;
