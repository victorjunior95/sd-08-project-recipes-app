import React, { useContext } from 'react';
import contextRecipes from '../context/Context';
import Recomendations from './Recomendations';

function Details() {
  const { currentFood, currentFoodIngredients } = useContext(contextRecipes);

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
          <h6 data-testid="recipe-category">{ food.strCategory }</h6>
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
          <p data-testid="video">Video</p>
          <Recomendations />
          <button data-testid="start-recipe-btn" type="button">Iniciar Receita</button>
        </div>
      ))}
    </>
  );
}

export default Details;
