import React from 'react';
import { useSelector } from 'react-redux';
import { findKey } from '../services';

const IngredientList = () => {
  const recipes = useSelector((state) => state.recipes.singleRecipe);
  const ingredient = findKey(recipes[0], 'strIngredient');
  const measure = findKey(recipes[0], 'strMeasure');

  return ingredient.map((nome, index) => {
    if (nome) {
      return (
        <p
          data-testid={ `${index}-ingredient-name-and-measure` }
          key={ index }
        >
          {`${nome} - ${measure[index]}`}
        </p>
      );
    }
    return undefined;
  });
};

export default IngredientList;
