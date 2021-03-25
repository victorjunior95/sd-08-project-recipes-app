import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Card.module.css';

const Card = ({ name, thumbnail, index, id }) => (
  <Link to={ `/comidas/${id}` }>
    <div data-testid={ `${index}-recipe-card` } className={ styles.card }>
      <img data-testid={ `${index}-card-img` } src={ thumbnail } alt={ name } />
      <p data-testid={ `${index}-card-name` } className={ styles.header }>{ name }</p>
    </div>
  </Link>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
