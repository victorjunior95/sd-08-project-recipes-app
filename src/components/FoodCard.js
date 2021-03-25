import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FoodCard({ recipes }) {
  const { strMeal, idMeal, strMealThumb } = recipes;

  return (
    <Link to={ `comidas/${idMeal} ` }>
      <div key={ strMeal } data-testid={ `${idMeal}-recipe-card` }>
        <img
          src={ strMealThumb }
          alt={ strMeal }
          data-testid={ `${idMeal}-card-img` }
        />
        <p data-testid={ `${idMeal}-card-name` }>{strMeal}</p>
      </div>
    </Link>
  );
}

FoodCard.propTypes = {
  recipes: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};
