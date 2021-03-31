import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Copy from 'clipboard-copy';
import MyContext from '../context/MyContext';
import IngredientesEmProcesso from '../components/IngredientesEmProcesso';
import requestById from '../services/requestById';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import verifyStorage from '../services/verifyStorage';
import verifyInFavorite from '../services/verifyInFavorite';
import '../styles/Comida.css';

function ComidasEmProgresso() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];

  const {
    recipe,
    setRecipe,
    renderButtonComparison,
    setRenderButtonComparison,
    copied,
    setCopied,
    favorite,
    setFavorite,
  } = useContext(MyContext);

  useEffect(() => {
    setRenderButtonComparison(verifyStorage(id, 'doneRecipes'));
  }, [renderButtonComparison]);

  useEffect(() => {
    setFavorite(verifyStorage(id, 'favoriteRecipes'));
  }, [favorite]);

  async function requestRecipe() {
    const recipeFromApi = await requestById(id, 'comidas');
    console.log(recipeFromApi.meals[0]);
    setRecipe(recipeFromApi.meals[0]);
  }

  // function iniciarReceita() {
  //   verifyInProgress(id, 'meals');
  //   history.push(`/comidas/${id}/in-progress`);
  // }

  function renderButton() {
    return (
      <button
        className="finish-recipe-btn"
        type="button"
        data-testid="finish-recipe-btn"
        // onClick={ iniciarReceita }
      >
        Finalizar Receita
      </button>
    );
  }

  function favoriteRecipe(status) {
    verifyInFavorite(recipe, 'Meal', status);
    setFavorite(status);
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
        onClick={ () => {
          Copy(`http://localhost:3000${history.location.pathname}`);
          setCopied(true);
        } }
      >
        {copied && 'Link copiado!'}
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button
        type="button"
        onClick={ () => (favorite ? favoriteRecipe(false) : favoriteRecipe(true)) }
      >
        <img
          data-testid="favorite-btn"
          src={ favorite ? whiteHeartIcon : blackHeartIcon }
          alt="favoriteIcon"
        />
      </button>
      <h4 data-testid="recipe-category">{recipe.strCategory}</h4>
      <IngredientesEmProcesso />
      <p data-testid="instructions">{recipe.strInstructions}</p>
      {renderButton()}
    </div>
  );
}

export default ComidasEmProgresso;
