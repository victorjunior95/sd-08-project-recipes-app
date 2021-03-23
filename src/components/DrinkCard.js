import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ drink, index }) {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <div data-testid={ `${index}-recipe-card` } className="drink-card">
      <img src={ strDrinkThumb } alt="Drink" data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
    </div>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DrinkCard;
