import React from 'react';
import PropTypes from 'prop-types';
import './cards.css';

function Card({ data }) {
  const { drink, index } = data;
  const { strDrinkThumb, strDrink } = drink;
  return (
    <section data-testid={ `${index}-recipe-card` } className="card">
      <img
        data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Card;
