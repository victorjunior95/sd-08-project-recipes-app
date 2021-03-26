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

  async function requestRecipe() {
    const recipeFromApi = await requestById(id, 'bebidas');
    setRecipe(recipeFromApi.drinks[0]);
  }

  useEffect(() => {
    requestRecipe();
  }, []);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipe.strDrinkThumb }
        alt={ recipe.strDrink }
      />
      <h3 data-testid="recipe-title">{recipe.strDrink}</h3>
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
      <h4 data-testid="recipe-category">{recipe.strAlcoholic}</h4>
      <Ingredientes />
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <RecomendedCards title="comidas" />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

export default Comida;
