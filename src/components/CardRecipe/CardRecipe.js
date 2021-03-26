import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../../images/shareIcon.svg';
import './cardRecipe.css';
const CardRecipe = ({ index, image, category, name, doneDate, tags }) => {
  return (
    <div className="card-recipe">
      <div className="left">
        <img
          className="card-recipe-image"
          src={image}
          alt=""
          data-testid={`${index}-horizontal-image`}
        />
      </div>
      <div className="right">
        <span
          className="card-category"
          data-testid={`${index}-horizontal-top-text`}
        >
          {category}
        </span>
        <span className="card-name" data-testid={`${index}-horizontal-name`}>
          {name}
        </span>
        <span
          className="card-done-date"
          data-testid={`${index}-horizontal-done-date`}
        >
          Feita em: {doneDate}
        </span>
        <div className="card-tag">
          {tags.length > 0 &&
            tags.map((tag, key) => (
              <span
                className="badge badge-pill badge-success"
                key={key}
                data-testid={`${index}-${tag}-horizontal-tag`}
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
      <img
          className="card-icon-share"
          src={ShareIcon}
          data-testid={`${index}-horizontal-share-btn`}
        />
    </div>
  );
};

CardRecipe.propTypes = {
  index: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf.isRequired,
};

export default CardRecipe;
