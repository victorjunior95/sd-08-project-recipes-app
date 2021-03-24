import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainIngredientDrinkCard({ ingredientsDrinksData, index }) {
  const { strIngredient1 } = ingredientsDrinksData;
  console.log(strIngredient1);
  return (
    <div
      data-testid={ `${index}-ingredient-card` }
      className="MainCard"
    >
      <Link to="/bebidas/">
        <img
          data-testid={ `${index}-card-img` }
          className="img"
          src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png ` }
          alt={ strIngredient1 }
        />
      </Link>
      <Link to="/bebidas/">
        <p data-testid={ `${index}-card-name` }>{strIngredient1}</p>
      </Link>
    </div>
  );
}

MainIngredientDrinkCard.propTypes = {
  ingredientsDrinksData: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default MainIngredientDrinkCard;
