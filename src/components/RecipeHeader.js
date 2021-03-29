import React from 'react';
import PropTypes from 'prop-types';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import styles from '../styles/components/RecipeHeader.module.css';

const RecipeHeader = ({ title, category }) => (
  <div className={ styles.header }>
    <div className={ styles.row }>
      <h2 data-testid="recipe-title">{ title }</h2>
      <div className={ styles.controls }>
        <a href="/" data-testid="share-btn">
          <img src={ shareIcon } alt="Share Icon" />
        </a>
        <a href="/" data-testid="favorite-btn">
          <img src={ whiteHeartIcon } alt="Share Icon" />
        </a>
      </div>
    </div>
    <p
      className={ styles.category }
      data-testid="recipe-category"
    >
      { category }
    </p>
  </div>
);

RecipeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default RecipeHeader;
