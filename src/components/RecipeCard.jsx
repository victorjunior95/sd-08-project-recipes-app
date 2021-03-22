import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function RecipeCard({ type, index, recipe }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={ `${pathname}/${recipe[`id${type}`]}` }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ recipe[`str${type}Thumb`] }
        alt={ recipe[`str${type}`] }
      />
      <p data-testid={ `${index}-card-name` }>{ recipe[`str${type}`] }</p>
    </Link>
  );
}

RecipeCard.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape().isRequired,
};

export default RecipeCard;
