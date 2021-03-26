import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/components/Card.module.css';

const Card = ({ name, thumbnail, index, category, ...rest }) => (
  <div
    // data-testid={ `${index}-recipe-card` }
    className={ styles.card }
    { ...rest }
  >
    <img
      data-testid={ `${index}-card-img` }
      src={ `${thumbnail}` }
      alt={ name }
    />
    <div className={ styles.cardBody }>
      { category && <p className={ styles.category }>{ category }</p> }
      <p data-testid={ `${index}-card-name` } className={ styles.header }>{ name }</p>
    </div>
  </div>
);

Card.defaultProps = {
  category: '',
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  category: PropTypes.string,
};

export default Card;
