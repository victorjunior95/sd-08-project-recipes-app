import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeCards({ recipe, type, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ recipe[`str${type}Thumb`] }
        alt={ recipe[`str${type}`] }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{recipe[`str${type}`]}</p>
    </div>
  );
}

RecipeCards.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
