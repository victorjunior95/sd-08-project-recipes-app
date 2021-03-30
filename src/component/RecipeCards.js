import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

export default function RecipeCards({ recipe, type, index, id, recommendation }) {
  const { pathname } = useLocation();
  const link = pathname.includes('comidas') ? 'comidas' : 'bebidas';
  return (
    <Link
      to={ `/${link}/${id}` }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        style={ { width: '100%' } }
        src={ recipe[`str${type}Thumb`] }
        alt={ recipe[`str${type}`] }
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={
          recommendation ? `${index}-recomendation-title` : `${index}-card-name`
        }
      >
        {recipe[`str${type}`]}
      </p>
    </Link>
  );
}

RecipeCards.defaultProps = {
  recommendation: false,
};

RecipeCards.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recommendation: PropTypes.bool,
};
