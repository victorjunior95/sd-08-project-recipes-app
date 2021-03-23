import React from 'react';
import PropTypes from 'prop-types';
import './cards.css';

function Card({ data }) {
  const { meal, index } = data;
  const { strMealThumb, strMeal } = meal;
  return (
    <section data-testid={ `${index}-recipe-card` } className="card">
      <img
        data-testid={ `${index}-card-img` }
        src={ strMealThumb }
        alt={ strMeal }
      />
      <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Card;
