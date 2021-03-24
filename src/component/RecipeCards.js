import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeCards({ recipe, type, index }) {
  return (
    <>
      <img
        style={ { width: '100%' } }
        src={ recipe[`str${type}Thumb`] }
        alt={ recipe[`str${type}`] }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{recipe[`str${type}`]}</p>
    </>
  );
}

RecipeCards.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
