import React from 'react';
import PropTypes from 'prop-types';
import { getIngredientsFinished } from '../services/getLocalStorage';
import { updateInProgressRecipes } from '../services/setLocalStorage';

const IngredientsRecipeDetailsInProgress = ({ ingredients, page, id }) => {
  const handleClick = (ingredient) => {
    updateInProgressRecipes(id, page, ingredient);
  };

  const showCheckBox = () => {
    const finishedIngredients = getIngredientsFinished(page, id);
    return ingredients.map((ingredient) => {
      console.log(ingredient, finishedIngredients);
      if (finishedIngredients.includes(ingredient)) {
        return (
          <section>
            <input
              data-testid="ingredient-step"
              type="checkbox"
              name="igredient"
              onClick={ () => handleClick(ingredient) }
              checked
            />
            {ingredient}
          </section>
        );
      }
      return (
        <section key={ ingredient }>
          <input
            key={ ingredient }
            data-testid="ingredient-step"
            type="checkbox"
            name="igredient"
            onClick={ () => handleClick(ingredient) }
          />
          {ingredient}
        </section>
      );
    });
  };

  return (
    <section>
      <h3>Ingredientes</h3>
      {showCheckBox()}
    </section>
  );
};

IngredientsRecipeDetailsInProgress.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  page: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default IngredientsRecipeDetailsInProgress;
