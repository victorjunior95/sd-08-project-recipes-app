import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import contextRecipes from '../context/Context';
import Button from './Button';
import Recomendations from './Recomendations';
import '../css/Details.css';

function Details() {
  const history = useHistory();
  const { currentFood, currentFoodIngredients } = useContext(contextRecipes);

  const ytVideo = () => (
    currentFood.strYoutube ? <iframe
      frameBorder="0"
      data-testid="video"
      key={ currentFood.strYoutube }
      src={ currentFood.strYoutube.split('watch?v=').join('embed/') }
      title="recipe video"
    />
      : ''
  );

  const historyPath = () => (
    history.push(`${history.location.pathname}/in-progress`)
  );

  return (
    <div className="detailsDiv">
      <img
        src={ currentFood.strMealThumb || currentFood.strDrinkThumb }
        data-testid="recipe-photo"
        alt="Thumbnail"
      />
      <h1 data-testid="recipe-title">
        { currentFood.strMeal || currentFood.strDrink }
      </h1>
      <p data-testid="share-btn">btnCompartilhar</p>
      <p data-testid="favorite-btn">btnFavorito</p>
      <h6
        data-testid="recipe-category"
      >
        { currentFood.strAlcoholic
          ? currentFood.strAlcoholic : currentFood.strCategory }
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
      <p data-testid="instructions">{ currentFood.strInstructions }</p>
      { ytVideo() }
      <Recomendations />
      <Button
        className="button-start-recipe"
        datatestid="start-recipe-btn"
        label="Iniciar Receita"
        onClick={ historyPath }
      />
    </div>
  );
}

export default Details;
