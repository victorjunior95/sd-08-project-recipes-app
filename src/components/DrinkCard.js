import React from 'react';
import PropTypes from 'prop-types';

function DrinkCard({ drink, index, history }) {
  const { strDrink, strDrinkThumb, idDrink } = drink;

  return (
<button
      type="button"
      data-testid={ `${index}-recipe-card` }
      onClick={ () => history.push(`/bebidas/${idDrink}`) }
    >
      <img
        src={ strDrinkThumb }
        alt="drink"
        data-testid={ `${index}-card-img` }
        className="button-item"
      />
      <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
    </button>);
}

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DrinkCard;
