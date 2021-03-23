import React from 'react';
import PropTypes from 'prop-types';

function DrinksCard(props) {
  const { index, drink } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
      <img src={ drink.strDrinkThumb } data-testid={ `${index}-card-img` } alt="teste" />
    </div>
  );
}

DrinksCard.propTypes = {
  index: PropTypes.number.isRequired,
  drink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrinksCard;
