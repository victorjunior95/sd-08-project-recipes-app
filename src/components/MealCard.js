import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ meal, index }) {
  const { strMeal, strMealThumb } = meal;
  return (
    <div data-testid={ `${index}-recipe-card` } className="meal-card">
      <img src={ strMealThumb } alt="meal" data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default MealCard;
