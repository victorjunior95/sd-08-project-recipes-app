import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ meal }) {
  const { strMeal, strMealThumb } = meal;
  return (
    <div>
      <img src={ strMealThumb } alt="meal " />
      <p>{ strMeal }</p>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default MealCard;
