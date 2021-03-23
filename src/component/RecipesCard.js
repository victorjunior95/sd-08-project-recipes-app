import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

export default function RecipeCards({ recipe, type, index, id }) {
  const location = useLocation();

  return (
    <Link
      to={ `${location.pathname}/${id}` }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        style={ { width: '100%' } }
        src={ recipe[`str${type}Thumb`] }
        alt={ recipe[`str${type}`] }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{recipe[`str${type}`]}</p>
    </Link>
  );
}

RecipeCards.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
