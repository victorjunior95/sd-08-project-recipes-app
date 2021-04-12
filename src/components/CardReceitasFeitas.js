import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardReceitasFeitas = (props) => {
  const { recipe, key } = props;
  return (
    <div>
      <div key={ recipe.id }>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <img
            data-testid={ `${key}-horizontal-image` }
            src={ recipe.image }
            alt={ recipe.name }
          />
          <p data-testid={ `${key}-horizontal-name` }>{recipe.name}</p>
        </Link>
        <p data-testid={ `${key}-horizontal-top-text` }>
          {(recipe.type === 'comida')
            ? `${recipe.area} - ${recipe.category}`
            : recipe.alcoholicOrNot }
        </p>
        <p data-testid={ `${key}-horizontal-done-date` }>{recipe.doneDate}</p>
        {
          recipe.tags.map((tag) => (
            <div key={ recipe.id } data-testid={ `${key}-${tag}-horizontal-tag` }>
              <h4>{tag}</h4>
            </div>))
        }
      </div>
    </div>);
};

CardReceitasFeitas.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
};

export default CardReceitasFeitas;
