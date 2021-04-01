import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

import DrinkCarousel from '../../components/carousel/DrinkCarousel';

export default function FoodDetails({ match: { params } }) {
  const [recipeById, setRecipeById] = useState();
  const { id } = params;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((data) => setRecipeById(data.meals[0]));
  }, [id]);

  if (!recipeById) return <div>Loading...</div>;

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

  const ingredients = Object.keys(recipeById)
    .filter((item) => item.includes('strIngredient') && recipeById[item]);

  const measures = Object.keys(recipeById)
    .filter((item) => item.includes('strMeasure') && recipeById[item]);

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
      <ul>
        {
          ingredients
            .map((item, index) => (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${recipeById[item]} - ${recipeById[measures[index]]}`}
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
        data-testid="start-recipe-btn"
        to={ `/comidas/${id}/in-progress` }
        style={ { position: 'fixed', bottom: '0px' } }
      >
        Iniciar Receita
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
