import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ meal, index, history }) {
  const { strMeal, strMealThumb, idMeal } = meal;

  return (
    <button
      type="button"
      data-testid={ `${index}-recipe-card` }
      onClick={ () => history.push(`/comidas/${idMeal}`) }
    >
      <img
        src={ strMealThumb }
        alt="meal"
        data-testid={ `${index}-card-img` }
        className="button-item"
      />
      <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
    </button>);
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default MealCard;
