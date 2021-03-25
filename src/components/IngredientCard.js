import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMeals, getCocktails } from '../services';
import RecipesContext from '../context/RecipesContext';

function IngredientCard({ ingredient, index, type }) {
  const {
    setMeals,
    setDrinks,
    shouldRenderAll,
    setShouldRenderAll,
  } = useContext(RecipesContext);

  const url = (type === 'meal') ? 'themealdb' : 'thecocktaildb';
  const page = (type === 'meal') ? 'comidas' : 'bebidas';

  async function handleClick() {
    if (type === 'meal') {
      const data = await getMeals('ingredient-search', ingredient);
      setMeals(data.meals);
      setShouldRenderAll(false);
    } else {
      const data = await getCocktails('ingredient-search', ingredient);
      setDrinks(data.drinks);
      setShouldRenderAll(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-ingredient-card` }
        onClick={ handleClick }
      >
        <img src={ `https://www.${url}.com/images/ingredients/${ingredient}-Small.png` } alt="ingredient" data-testid={ `${index}-card-img` } />
        <p data-testid={ `${index}-card-name` }>{ingredient}</p>
      </button>
      {!shouldRenderAll && <Redirect to={ `/${page}` } /> }
    </div>
  );
}

IngredientCard.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientCard;
