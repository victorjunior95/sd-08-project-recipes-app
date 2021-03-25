import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Card.module.css';

const Card = ({ name, thumbnail, index }) => (
  <div data-testid={ `${index}-recipe-card` } className={ styles.card }>
    <img data-testid={ `${index}-card-img` } src={ thumbnail } alt={ name } />
    <p data-testid={ `${index}-card-name` } className={ styles.header }>{ name }</p>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
