import React from 'react';
import PropTypes from 'prop-types';

export default function CocktailCard({ recipes }) {
  const { idDrink, strDrink, strDrinkThumb } = recipes;
  return (
    <div key={ strDrink } data-testid={ `${idDrink}-recipe-card` }>
      <img
        src={ strDrinkThumb }
        alt={ strDrink }
        data-testid={ `${idDrink}-card-img` }
      />
      <p data-testid={ `${idDrink}-card-name` }>{strDrink}</p>
    </div>
  );
}

CocktailCard.propTypes = {
  recipes: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    idDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};
