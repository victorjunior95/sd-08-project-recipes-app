import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ExploreFoodOrDrink({ foodOrDrink, meals }) {
  const { idMeal } = meals;
  return (
    <div>
      <Link to={ `/explorar/${foodOrDrink}/ingredientes` }>
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>

      { window.location.pathname !== '/explorar/bebidas'
      && (
        <Link to={ `/explorar/${foodOrDrink}/area` }>
          <button
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>)}
      <Link to={ `/${foodOrDrink}/${idMeal}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
    </div>
  );
}

ExploreFoodOrDrink.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
  meals: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExploreFoodOrDrink;
