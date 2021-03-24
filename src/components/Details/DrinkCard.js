import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './cards.css';

function Card({ data }) {
  const { drink, index } = data;
  const { strDrinkThumb, strDrink } = drink;

  return (
    <section data-testid={ `${index}-recomendation-card` } className="card">
      <img
        data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      { strDrink }
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
