import React, { useEffect, useState } from 'react';

import { useLocation, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import RecomandationCard from '../components/RecomandationCard';
import { getDoneRecipes, inProgressRecipes } from '../utils';

import { fetchProductDetailsById } from '../services';

const Detalhes = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMeal, setIsMeal] = useState(true);
  const [foodDetails, setFoodDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [buttonRecipe, setButtonRecipe] = useState(true);
  const [inProgress, setProgress] = useState(false);
  const [hidden, setHidden] = useState(false);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const doneRecipes = getDoneRecipes();
    const [,, id] = location.pathname.split('/');
    const isDone = doneRecipes.some((recipe) => recipe.id === id);
    setButtonRecipe(!isDone);
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      const [, type, id] = location.pathname.split('/');
      const productType = { comidas: 'meals', bebidas: 'drinks' };

      const foodDetailRequest = await fetchProductDetailsById(id, type);
      const foodDetail = foodDetailRequest[productType[type]][0];

      const ingredientFilter = Object
        .keys(foodDetail).filter(
          (key) => key.includes('strIngredient') && foodDetail[key],
        );

      setIsMeal(type === 'comidas');
      setFoodDetails(foodDetail);
      setIngredients(ingredientFilter);
    };

    fetchData();
  }, [location.pathname]);

  useEffect(() => {
    const fetchInProgress = async () => {
      const inProgres = await inProgressRecipes(isMeal);
      const [,, id] = location.pathname.split('/');
      if (!inProgres) return;
      setProgress(!!inProgres[id]);
    };
    fetchInProgress();
  }, [location.pathname, isMeal]);

  const handleIsFavorite = (favorite) => {
    console.log(!favorite, 'oi');
    localStorage.setItem('isFavorite', !favorite);
    setIsFavorite(!favorite);
  };
  useEffect(() => {
    const getIsFavorite = () => {
      const getFavorite = localStorage.getItem('isFavorite');
      console.log(getFavorite, 'oi');
      return getFavorite;
    };
    console.log(isFavorite, 'faroti');
    const results = getIsFavorite();
    setIsFavorite(results);
    console.log(results);
    console.log(getIsFavorite());
    // setTimeout(() => {
    console.log(isFavorite, 'faroti');
    // }, 500);
  }, []);

  if (!Object.keys(foodDetails).length) return <h2>Loading...</h2>;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ isMeal ? foodDetails.strMealThumb : foodDetails.strDrinkThumb }
        alt={ foodDetails.strMeal }
        width="300px"
      />
      <h2 data-testid="recipe-title">
        {isMeal ? foodDetails.strMeal : foodDetails.strDrink}
      </h2>
      <h3 data-testid="recipe-category">
        { isMeal ? foodDetails.strCategory : foodDetails.strAlcoholic}
      </h3>
      <button
        type="button"
        onClick={ () => {
          const one = 1000;
          copy(window.location); setHidden(true);
          setTimeout(() => setHidden(false), one);
        } }
        data-testid="share-btn"
      >
        <span hidden={ !hidden }>Link copiado!</span>
        <img src={ shareIcon } alt="Share" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => handleIsFavorite(isFavorite) }
      >
        <img src={ isFavorite ? blackHeartIcon : whiteHeartIcon } alt="Favorite" />
      </button>
      {
        ingredients.map((ingredient, index) => {
          const ingredientName = foodDetails[ingredient];
          const ingMeasure = foodDetails[ingredient.replace('Ingredient', 'Measure')];

          return (
            <p key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${ingredientName} - ${ingMeasure}`}
            </p>
          );
        })
      }
      <p data-testid="instructions">{foodDetails.strInstructions}</p>

      {foodDetails.strYoutube && <iframe
        src={ `https://www.youtube.com/embed/${foodDetails.strYoutube.split('v=')[1]}` }
        frameBorder="0"
        allowFullScreen
        title="video"
        data-testid="video"
      />}

      <RecomandationCard type={ isMeal ? 'comidas' : 'bebidas' } />

      {buttonRecipe && (
        <button
          onClick={ () => { history.push(`${location.pathname}/in-progress`); } }
          type="button"
          className="btnStyle"
          data-testid="start-recipe-btn"
        >
          { inProgress ? 'Continuar Receita' : 'Iniciar Receita'}

        </button>)}
    </div>
  );
};
export default Detalhes;
