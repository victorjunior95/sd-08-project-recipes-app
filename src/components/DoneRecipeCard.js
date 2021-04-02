import React from 'react';
import PropTypes from 'prop-types';

import BigCard from './BigCard';
import BigCardHeader from './BigCardHeader';
import BigCardTag from './BigCardTag';

const DoneRecipeCard = ({ recipe, index }) => {
  function renderImage() {
    return (
      <img
        src={ recipe.image }
        alt={ recipe.name }
        data-testid={ `${index}-horizontal-image` }
      />
    );
  }

  function renderInfo() {
    return (
      <>
        <BigCardHeader
          category={ recipe.alcoholicOrNot || recipe.category }
          area={ recipe.area }
          name={ recipe.name }
          index={ index }
          showShare
        />
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          { `Feita em: ${recipe.doneDate}` }
        </p>
        <div>
          { recipe.tags.map((tag, tagIndex) => (
            <BigCardTag
              data-testid={ `${index}-${tag}-horizontal-tag` }
              key={ tagIndex }
              tag={ tag }
            />)) }
        </div>
      </>
    );
  }

  return (
    <BigCard
      image={ renderImage() }
      info={ renderInfo() }
    />
  );
};

DoneRecipeCard.propTypes = {
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
  index: PropTypes.number.isRequired,
};

export default DoneRecipeCard;
