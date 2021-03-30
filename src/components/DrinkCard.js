import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

function DrinkCard({ drink, index }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { strDrink, strDrinkThumb, idDrink } = drink;

  return (
    <div data-testid={ `${index}-recipe-card` }>
      <button
        type="button"
        onClick={ () => setShouldRedirect(true) }
      >
        <img
          src={ strDrinkThumb }
          alt="drink"
          data-testid={ `${index}-card-img` }
          className="button-item"
        />
        <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
      </button>
      {shouldRedirect && <Redirect to={ `/bebidas/${idDrink}` } />}
    </div>
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
