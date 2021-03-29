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
import '../styles/Bebida.css';
import verifyInProgress from '../services/verifyInProgress';
import verifyText from '../services/verifyText';

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
    const storage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    if (storage && storage.length) {
      storage.find((item) => {
        if (item.id === id) {
          setRenderButtonComparison(false);
        }
        return null;
      });
    } else {
      setRenderButtonComparison(true);
    }
  }, [renderButtonComparison]);

  function iniciarReceita() {
    verifyInProgress(id, 'cocktails');
    history.push(`/bebidas/${id}/in-progress`);
  }

  function renderButton() {
    const textButton = verifyText(id);

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
        onClick={ () => {
          if (favorite) {
            setFavorite(false);
          } else {
            setFavorite(true);
          }
        } }
      >
        <img
          data-testid="favorite-btn"
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
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
