import React from 'react';
import PropTypes from 'prop-types';

function DoneRecipeCard({ index, recipe }) {
  const {
    alcoholicOrNot,
    area,
    category,
    id,
    image,
    name,
    type,
  } = recipe;

  const doneDate = '00/00/0000';
  const tags = ['tag1', 'tag2'];

  const categoryId = `${index}-horizontal-top-text`;
  const doneDateId = `${index}-horizontal-done-date`;
  const imageId = `${index}-horizontal-image`;
  const nameId = `${index}-horizontal-name`;
  // const tagsId = `${index}-${tag}-horizontal-top-text`;
  const shareButtonId = `${index}-horizontal-share-btn`;

  return (
    <section>
      <img
        src={ recipe.image }
        alt={ recipe.name }
        data-testid={ imageId }
      />
      <div>
        <span>{ area }</span>
        { ' - ' }
        <span data-testid={ categoryId }>{ category }</span>
      </div>
      <h3 data-testid={ nameId }>{ recipe.name }</h3>
      { 'Feita em: ' }
      <span data-testid={ doneDateId }>{ doneDate }</span>
      <div>
        { tags.map((tag) => <span data-testid={ 'tag' }>{ tag }</span>) }
      </div>
    </section>
  ); 
}

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default DoneRecipeCard;

