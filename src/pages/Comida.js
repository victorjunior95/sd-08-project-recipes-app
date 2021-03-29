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
import '../styles/Comida.css';

function Comida() {
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

  let urlVideo;
  if (recipe.strYoutube) {
    urlVideo = recipe.strYoutube.replace('watch?v=', 'embed/');
  }

  async function requestRecipe() {
    const recipeFromApi = await requestById(id, 'comidas');
    console.log(recipeFromApi.meals[0]);
    setRecipe(recipeFromApi.meals[0]);
  }

  function iniciarReceita() {
    const startRecipe = {
      id: recipe.idMeal,
      type: 'bebida',
      area: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNor: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      doneDate: '',
      tags: recipe.strTags,
    };
    let savedRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!savedRecipes) {
      localStorage.setItem('inProgressRecipes', JSON.stringify([]));
      savedRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    }
    localStorage.setItem('inProgressRecipes',
      JSON.stringify(savedRecipes.concat(startRecipe)));
    setRenderButtonComparison(false);
    history.push(`/comidas/${id}/in-progress`);
  }

  function renderButton() {
    return (
      <button
        className="iniciar-receita-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ iniciarReceita }
      >
        Iniciar Receita
      </button>
    );
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
      <h4 data-testid="recipe-category">{recipe.strCategory}</h4>
      <Ingredientes />
      <iframe src={ urlVideo } title={ recipe.strMeal } data-testid="video" />
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <RecomendedCards title="bebidas" />
      {renderButtonComparison && renderButton()}
    </div>
  );
}

export default Comida;
