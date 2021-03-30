import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ type, index, recipe, recommendation }) {
  return (
    <Link
      to={ `/${type}/${recipe.id}` }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ recipe.image }
        alt={ recipe.name }
      />
      { recommendation
          && <p>{ type === 'comidas' ? recipe.category : recipe.alcoholicOrNot }</p> }
      <p
        data-testid={
          recommendation ? `${index}-recomendation-title` : `${index}-card-name`
        }
      >
        { recipe.name }
      </p>
    </Link>
  );
}

RecipeCard.defaultProps = {
  recommendation: false,
};

RecipeCard.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape().isRequired,
  recommendation: PropTypes.bool,
};

export default RecipeCard;
