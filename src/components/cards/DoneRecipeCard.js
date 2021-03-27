import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

function DoneRecipeCard({ index, recipe }) {
  const {
    area,
    category,
    image,
    name,
  } = recipe;

  /*
    const {
      alcoholicOrNot,
      area,
      category,
      id,
      image,
      name,
      type,
    } = recipe;
  */

  const doneDate = '00/00/0000';
  const tags = ['tag1', 'tag2'];

  const categoryId = `${index}-horizontal-top-text`;
  const doneDateId = `${index}-horizontal-done-date`;
  const imageId = `${index}-horizontal-image`;
  const nameId = `${index}-horizontal-name`;
  // const tagsId = `${index}-${tag}-horizontal-top-text`;
  const shareButtonId = `${index}-horizontal-share-btn`;

  function showTags(allTags) {
    return allTags.map((tag) => {
      const id = `${index}-${tag}-horizontal-tag`;
      return <span key={ id } data-testid={ id }>{ tag }</span>;
    });
  }

  return (
    <section>
      <img
        src={ image }
        alt={ name }
        data-testid={ imageId }
      />
      <div>
        <span>{ area }</span>
        { ' - ' }
        <span data-testid={ categoryId }>{ category }</span>
        <img data-testid={ shareButtonId } src={ shareIcon } alt="share icon" />
      </div>
      <h3 data-testid={ nameId }>{ name }</h3>
      { 'Feita em: ' }
      <span data-testid={ doneDateId }>{ doneDate }</span>
      <div>
        { showTags(tags) }
      </div>
    </section>
  );
}

DoneRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    area: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default DoneRecipeCard;
