import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import contextRecipes from '../context/Context';
import Button from './Button';
import Recomendations from './Recomendations';

function Details() {
  const history = useHistory();
  const { currentFood, currentFoodIngredients } = useContext(contextRecipes);

  const ytVideo = () => (
    history.location.pathname.includes('comidas')
      ? currentFood.map((video) => (
        <iframe
          frameBorder="0"
          data-testid="video"
          key={ video.strYoutube }
          src={ video.strYoutube.split('watch?v=').join('embed/') }
          title="recipe video"
        />
      ))
      : ''
  );

  const historyPath = () => (
    history.push(`${history.location.pathname}/in-progress`)
  );

  return (
    <>
      { currentFood.map((food) => (
        <div key={ 0 }>
          <img
            src={ food.strMealThumb || food.strDrinkThumb }
            data-testid="recipe-photo"
            alt="Thumbnail"
          />
          <h1 data-testid="recipe-title">
            { food.strMeal || food.strDrink }
          </h1>
          <p data-testid="share-btn">btnCompartilhar</p>
          <p data-testid="favorite-btn">btnFavorito</p>
          <h6
            data-testid="recipe-category"
          >
            { food.strAlcoholic ? food.strAlcoholic : food.strCategory }
          </h6>
          <h2>Ingredientes</h2>
          <ul>
            { currentFoodIngredients.map((curr, index) => (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                { curr }
              </li>
            ))}
          </ul>
          <h2>Instruções</h2>
          <p data-testid="instructions">{ food.strInstructions }</p>

          <div>
            {ytVideo()}
          </div>
          <Recomendations />
          <Button
            datatestid="start-recipe-btn"
            label="Iniciar Receita"
            onClick={ historyPath }
          />
        </div>
      ))}
    </>
  );
}

export default Details;
