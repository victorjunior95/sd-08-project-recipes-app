import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Copy from 'clipboard-copy';
import MyContext from '../context/MyContext';
import RecomendedCards from '../components/RecomendedCards';
import Ingredientes from '../components/Ingredientes';
import requestById from '../services/requestById';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import verifyInProgress from '../services/verifyInProgress';
import verifyText from '../services/verifyText';
import '../styles/Bebida.css';
import verifyInFavorite from '../services/verifyInFavorite';
import verifyStorage from '../services/verifyStorage';

function Bebida() {
  const INICIO_CORTE = 9;
  const history = useHistory();
  const id = history.location.pathname
    .substr(INICIO_CORTE, history.location.pathname.length);

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
    console.log(recipeFromApi.drinks[0]);
    setRecipe(recipeFromApi.drinks[0]);
  }

  useEffect(() => {
    setRenderButtonComparison(verifyStorage(id, 'doneRecipes'));
  }, [renderButtonComparison]);

  useEffect(() => {
    setFavorite(verifyStorage(id, 'favoriteRecipes'));
  }, [favorite]);

  function iniciarReceita() {
    verifyInProgress(id, 'cocktails');
    history.push(`/bebidas/${id}/in-progress`);
  }

  function renderButton() {
    const textButton = verifyText(id, 'cocktails');

    return (
      <button
        className="iniciar-receita-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ iniciarReceita }
      >
        { textButton }
      </button>
    );
  }

  function favoriteRecipe(status) {
    verifyInFavorite(recipe, 'Drink', status);
    setFavorite(status);
  }

  useEffect(() => {
    requestRecipe();
    console.log('effect Bebida');
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
        // onClick={ () => {
        //   if (favorite) {
        //     setFavorite(false);
        //   } else {
        //     setFavorite(true);
        //   }
        // } }
      >
        <img
          data-testid="favorite-btn"
          src={ favorite ? whiteHeartIcon : blackHeartIcon }
          alt="favoriteIcon"
        />
      </button>
      <h4 data-testid="recipe-category">{recipe.strAlcoholic}</h4>
      <Ingredientes />
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <RecomendedCards title="comidas" />
      {renderButtonComparison && renderButton()}
    </div>
  );
}

export default Bebida;
