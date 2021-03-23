import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/components/Card.module.css';

const Card = ({ nome, thumbnail, index }) => (
  <div data-testid={ `${index}-recipe-card` } className={ styles.card }>
    <p data-testid={ `${index}-card-name` } className={ styles.header }>{ nome }</p>
    <img data-testid={ `${index}-card-img` } src={ thumbnail } alt={ nome } />
  </div>
);

Card.propTypes = {
  nome: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
