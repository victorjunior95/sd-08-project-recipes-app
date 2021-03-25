import React from 'react';
import PropTypes from 'prop-types';

const IngredientsRecipeDetails = ({ ingredients }) => (
  <section>
    <h3>Ingredientes</h3>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
          {ingredient}
        </li>
      ))}
    </ul>
  </section>
);

IngredientsRecipeDetails.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default IngredientsRecipeDetails;
