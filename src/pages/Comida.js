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
    const storage = JSON.parse(localStorage.getItem('doneRecipe')) || [];
    console.log('useEffect antes do if', storage);
    if (storage && storage.length) {
      console.log(storage, 'dentro do if');
      storage.map((item) => {
        if (item.id === id) {
          console.log('verificação do storage');
          setRenderButtonComparison(false);
        } else {
          setRenderButtonComparison(true);
        }
        return null;
      });
    } else {
      console.log(storage, 'cai no else');
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
    let savedRecipes = JSON.parse(localStorage.getItem('doneRecipe'));
    if (!savedRecipes) {
      localStorage.setItem('doneRecipe', JSON.stringify([]));
      savedRecipes = JSON.parse(localStorage.getItem('doneRecipe'));
    }
    localStorage.setItem('doneRecipe', JSON.stringify(savedRecipes.concat(startRecipe)));
    setRenderButtonComparison(false);
    history.push(`/comidas/${id}/in-progress`);
    console.log('iniciar receitar', renderButtonComparison);
  }

  function renderButton() {
    // console.log('render button');
    // console.log(renderButtonComparison);
    // setRenderButtonComparison(true);
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

  const storagesssss = JSON.parse(localStorage.getItem('doneRecipe'));
  console.log(renderButtonComparison, 'da pagina');
  console.log(storagesssss, 'storage usada pra renderizar');
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
