import React from 'react';
import PropTypes from 'prop-types';

export default function FoodCard({ recipes }) {
  const { strMeal, idMeal, strMealThumb } = recipes;
  return (
    <div key={ strMeal } data-testid={ `${idMeal}-recipe-card` }>
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid={ `${idMeal}-card-img` }
      />
      <p data-testid={ `${idMeal}-card-name` }>{strMeal}</p>
    </div>
  );
}

FoodCard.propTypes = {
  recipes: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};
