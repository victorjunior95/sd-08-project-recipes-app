import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import RecomendedCards from '../components/RecomendedCards';
import Ingredientes from '../components/Ingredientes';
import requestById from '../services/requestById';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/Bebida.css';

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
  } = useContext(MyContext);

  async function requestRecipe() {
    const recipeFromApi = await requestById(id, 'bebidas');
    console.log(recipeFromApi.drinks[0]);
    setRecipe(recipeFromApi.drinks[0]);
  }

  function iniciarReceita() {
    const startRecipe = {
      id: recipe.idDrink,
      type: 'bebida',
      area: '',
      category: recipe.strCategory,
      alcoholicOrNor: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
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

  function renderButtonVerify() {
    const storage = JSON.parse(localStorage.getItem('doneRecipe'));
    if (!storage) {
      return (
        renderButton()
      );
    }
    storage.map((item) => {
      console.log(id);
      if (item.id === id) {
        setRenderButtonComparison(false);
      } else {
        setRenderButtonComparison(true);
      }
      return null;
    });
    if (!renderButtonComparison) {
      return null;
    }
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
      {/* {!renderButtonComparison ? renderButtonVerify() : renderButton()} */}
    </div>
  );
}

export default Comida;
