import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ExploreFoodOrDrink({ foodOrDrink, id }) {
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
      <Link to={ `/${foodOrDrink}/${id}` }>
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
  id: PropTypes.string.isRequired,
};

export default ExploreFoodOrDrink;
