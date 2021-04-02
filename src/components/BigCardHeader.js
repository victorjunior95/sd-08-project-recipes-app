import React from 'react';
import PropTypes from 'prop-types';

import shareIcon from '../images/shareIcon.svg';

import styles from '../styles/components/BigCardHeader.module.css';

const BigCardHeader = ({ name, category, area, showShare, index }) => (
  <div className={ styles.bigCardHeader }>
    { showShare && (
      <div className={ styles.shareButton }>
        <img
          src={ shareIcon }
          alt={ name }
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </div>)}
    <p
      data-testid={ `${index}-horizontal-top-text` }
      className={ styles.category }
    >
      { `${area} - ${category}` }
    </p>
    <p
      data-testid={ `${index}-horizontal-name` }
      className={ styles.name }
    >
      { name }
    </p>
  </div>
);

BigCardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  showShare: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default BigCardHeader;
