import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ drink }) {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <div>
      <img src={ strDrinkThumb } alt="Drink " />
      <p>{ strDrink }</p>
    </div>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
};

export default DrinkCard;
