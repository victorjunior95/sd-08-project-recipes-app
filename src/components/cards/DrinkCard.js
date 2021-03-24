import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './cards.css';

function Card({ data }) {
  const [cardSelected, setCardSelected] = useState(false);
  const { drink, index } = data;
  const { strDrinkThumb, strDrink } = drink;

  if (cardSelected) {
    return <Redirect to={ `/comidas/${drink.idDrink}` } />;
  }

  return (
    <section data-testid={ `${index}-card-name` } className="card">
      <img
        data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      <button
        onClick={ () => setCardSelected(true) }
        data-testid={ `${index}-recipe-card` }
        type="button"
      >
        { strDrink }
      </button>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Card;
