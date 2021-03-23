import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DrinkCard({ drink, index }) {
  const { strDrink, strDrinkThumb, idDrink } = drink;
  return (
    <Link data-testid={ `${index}-recipe-card` } to={ `/bebidas/${idDrink}` }>
      <img src={ strDrinkThumb } alt="Drink" data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
    </Link>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DrinkCard;
