import React from 'react';
import PropTypes from 'prop-types';

function RecipesCard(props) {
  const { index, meal } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
      <img src={ meal.strMealThumb } data-testid={ `${index}-card-img` } alt="teste" />
    </div>
  );
}

RecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipesCard;
