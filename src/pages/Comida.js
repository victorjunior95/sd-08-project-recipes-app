import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import RecomendedCards from '../components/RecomendedCards';
import Ingredientes from '../components/Ingredientes';
import requestById from '../services/requestById';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function Comida() {
  const INICIO_CORTE = 9;
  const history = useHistory();
  const id = history.location.pathname
    .substr(INICIO_CORTE, history.location.pathname.length);

  const { recipe, setRecipe } = useContext(MyContext);

  let urlVideo;
  if (recipe.strYoutube) {
    urlVideo = recipe.strYoutube.replace('watch?v=', 'embed/');
  }

  async function requestRecipe() {
    const recipeFromApi = await requestById(id, 'comidas');
    setRecipe(recipeFromApi.meals[0]);
  }

  useEffect(() => {
    requestRecipe();
  }, []);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
      />
      <h3 data-testid="recipe-title">{recipe.strMeal}</h3>
      <button
        type="button"
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
      </button>
      <h4 data-testid="recipe-category">{recipe.strCategory}</h4>
      <Ingredientes />
      <iframe src={ urlVideo } title={ recipe.strMeal } data-testid="video" />
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <RecomendedCards title="bebidas" />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

export default Comida;
