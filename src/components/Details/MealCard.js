import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './cards.css';

function Card({ data }) {
  const { meal, index } = data;
  const { strMealThumb, strMeal } = meal;
  return (
    <section data-testid={ `${index}-recomendation-card` } className="card">
      <img
        data-testid={ `${index}-card-img` }
        src={ strMealThumb }
        alt={ strMeal }
      />
      { strMeal }
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
