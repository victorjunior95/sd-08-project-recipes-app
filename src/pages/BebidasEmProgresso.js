import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Copy from 'clipboard-copy';
import MyContext from '../context/MyContext';
import requestById from '../services/requestById';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import verifyInFavorite from '../services/verifyInFavorite';
import verifyStorage from '../services/verifyStorage';
import IngredientesEmProcesso from '../components/IngredientesEmProcesso';
import '../styles/Bebida.css';

function BebidasEmProgresso() {
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

  async function requestRecipe() {
    const recipeFromApi = await requestById(id, 'bebidas');
    setRecipe(recipeFromApi.drinks[0]);
  }

  useEffect(() => {
    setRenderButtonComparison(verifyStorage(id, 'doneRecipes'));
  }, [renderButtonComparison]);

  useEffect(() => {
    setFavorite(verifyStorage(id, 'favoriteRecipes'));
  }, [favorite]);

  // function iniciarReceita() {
  //   verifyInProgress(id, 'cocktails');
  //   history.push(`/bebidas/${id}/in-progress`);
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
    verifyInFavorite(recipe, 'Drink', status);
    setFavorite(status);
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
      <div className="nomeEbotões">
        <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
        <div>
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
        </div>
      </div>
      <h4 data-testid="recipe-category">{recipe.strAlcoholic}</h4>
      <IngredientesEmProcesso id={ id } type="cocktails" />
      <div className="instruções">
        <h2>Instruções</h2>
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </div>
      {renderButton()}
    </div>
  );
}

export default BebidasEmProgresso;
