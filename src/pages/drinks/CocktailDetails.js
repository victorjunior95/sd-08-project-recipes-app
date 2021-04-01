import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FoodCarousel from '../../components/carousel/FoodCarousel';
import RecipesContext from '../../ContextApi/RecipesContext';

export default function CocktailDetails({ match: { params } }) {
  const { recipeDetails, setSearchParam } = useContext(RecipesContext);

  const [recipeById, setRecipeById] = useState();
  const { id } = params;

  // useEffect(() => {
  //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  //     .then((resp) => resp.json())
  //     .then((data) => setRecipeById(data.drinks[0]));
  // }, [id]);

  useEffect(() => {
    setSearchParam({
      selectedParam: 'drink-details',
      id,
    });
  }, [id, setSearchParam]);

  useEffect(() => {
    setRecipeById(recipeDetails);
  }, [recipeDetails]);

  if (!recipeById) return <div>Loading...</div>;

  const ingredients = Object.keys(recipeById)
    .filter((item) => item.includes('strIngredient')
    && recipeById[item])
    .map((ingredient) => recipeById[ingredient]);

  const measures = Object.keys(recipeById)
    .filter((item) => item.includes('strMeasure')
    && recipeById[item])
    .map((measure) => recipeById[measure]);

  return (
    <div style={ { width: '50%' } }>
      <img
        src={ recipeById.strDrinkThumb }
        data-testid="recipe-photo"
        alt="Thumbnail"
      />
      <h1 data-testid="recipe-title">
        {recipeById.strDrink}
      </h1>
      <p data-testid="share-btn">btnCompartilhar</p>
      <p data-testid="favorite-btn">btnFavorito</p>
      <h6 data-testid="recipe-category">
        <b>
          {recipeById.strCategory}
        </b>
        <span data-testid="recipe-category">
          {recipeById.strAlcoholic}
        </span>
      </h6>
      <h2>Ingredientes</h2>
      <ul>
        {
          ingredients
            .map((item, index) => (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${item} - ${measures[index]}`}
              </li>))
        }
      </ul>
      <section>
        <h2>Instruções</h2>
        <p data-testid="instructions">{recipeById.strInstructions}</p>
        {console.log(recipeById)}
      </section>
      <FoodCarousel />
      <Link
        data-testid="start-recipe-btn"
        to={ `/bebidas/${id}/in-progress` }
        style={ { position: 'fixed', bottom: '0px' } }
      >
        Iniciar Receita
      </Link>
    </div>
  );
}

CocktailDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
