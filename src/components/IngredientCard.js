import React from 'react';
import PropTypes from 'prop-types';

function IngredientCard({ ingredient, index, type }) {
  const url = (type === 'meal') ? 'themealdb' : 'thecocktaildb';
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img src={ `https://www.${url}.com/images/ingredients/${ingredient}-Small.png` } alt="ingredient" data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{ingredient}</p>
    </div>
  );
}

IngredientCard.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientCard;
