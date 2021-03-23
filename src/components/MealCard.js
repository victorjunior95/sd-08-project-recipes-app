import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MealCard({ meal, index }) {
  const { strMeal, strMealThumb, idMeal } = meal;

  return (
    <Link data-testid={ `${index}-recipe-card` } to={ `/comidas/${idMeal}` }>
      <img src={ strMealThumb } alt="meal" data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
    </Link>
  );
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default MealCard;
