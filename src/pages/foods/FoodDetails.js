import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

import DrinkCarousel from '../../components/carousel/DrinkCarousel';
import RecipesContext from '../../ContextApi/RecipesContext';

export default function FoodDetails({ match: { params } }) {
  const { recipeDetails, setSearchParam } = useContext(RecipesContext);
  const [recipeById, setRecipeById] = useState();
  const { id } = params;

  const storageRecipe = localStorage.getItem('RecipeInProgress') || [];

  useEffect(() => {
    setSearchParam({
      selectedParam: 'food-details',
      id,
    });
  }, [id, setSearchParam]);

  useEffect(() => {
    setRecipeById(recipeDetails);
  }, [recipeDetails]);

  if (!recipeById) return <div>Loading...</div>;

  // Vídeo da receita

  const ytVideo = () => (
    recipeById.strYoutube ? <iframe
      frameBorder="0"
      data-testid="video"
      key={ recipeById.strYoutube }
      src={ recipeById.strYoutube.split('watch?v=').join('embed/') }
      title="recipe video"
    />
      : ''
  );

  // Acessando chaves ingredient e measure da receita

  const ingredients = Object.keys(recipeById)
    .filter((item) => item.includes('strIngredient')
    && recipeById[item])
    .map((ingredient) => recipeById[ingredient]);

  const measures = Object.keys(recipeById)
    .filter((item) => item.includes('strMeasure')
    && recipeById[item])
    .map((measure) => recipeById[measure]);

  // Salvando receita no localStorage

  function setLocalStorage() {
    const recipe = JSON.stringify(recipeById);
    localStorage.setItem('RecipeInProgress', recipe);
  }

  return (
    <div style={ { width: '50%' } }>
      <figure className="figure">
        <img
          src={ recipeById.strMealThumb }
          data-testid="recipe-photo"
          className="figure-img img-fluid rounded"
          alt="Thumbnail"
        />
      </figure>
      <h1 data-testid="recipe-title">
        {recipeById.strMeal}
      </h1>
      <p data-testid="share-btn">btnCompartilhar</p>
      <p data-testid="favorite-btn">btnFavorito</p>
      <h5 data-testid="recipe-category">
        <b>
          {recipeById.strCategory}
        </b>
      </h5>
      <h2>Ingredientes</h2>
      {console.log(recipeById)}
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
        {ytVideo()}
      </section>
      <DrinkCarousel />
      <Link
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="start-recipe-btn"
        to={ `/comidas/${id}/in-progress` }
        onClick={ setLocalStorage }
      >
        {storageRecipe.length > 0 ? 'Continuar Receita' : 'Iniciar Receita'}
      </Link>
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
