import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

function MealCard({ meal, index }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { strMeal, strMealThumb, idMeal } = meal;

  return (
    <div data-testid={ `${index}-recipe-card` }>
      <button
        type="button"
        onClick={ () => setShouldRedirect(true) }
      >
        <img
          src={ strMealThumb }
          alt="meal"
          data-testid={ `${index}-card-img` }
          className="button-item"
        />
        <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
      </button>
      {shouldRedirect && <Redirect to={ `/comidas/${idMeal}` } />}
    </div>
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
