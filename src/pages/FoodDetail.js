import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchMealActionId from '../redux/actions/fetchMealId';
import fetchDrinkActionId from '../redux/actions/fetchDrink';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import clearRecipesAction from '../redux/actions/clearRecipesAction';
import IngredientList from '../components/IngredientList';

function FoodDetail() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const arrayId = pathname.split('/')[2];
  const arrayRecipes = pathname.split('/')[1];
  const recipes = useSelector((state) => state.recipes.recipes);

  useEffect(() => {
    let fetchData = '';
    if (arrayRecipes === 'comidas') {
      fetchData = (id) => dispatch(fetchMealActionId(id));
    }
    if (arrayRecipes === 'bebidas') {
      fetchData = (id) => dispatch(fetchDrinkActionId(id));
    }
    fetchData(arrayId);
  }, [arrayId]);

  useEffect(() => () => {
    const clearDispatch = () => dispatch(clearRecipesAction());
    clearDispatch();
  }, []);

  const recipe = recipes[0];

  const renderMeal = () => {
    return recipe !== undefined && (
      <div>
        {
          arrayRecipes === 'comidas'
            ? <img data-testid="recipe-photo" src={ recipe.strMealThumb } alt="img" />
            : <img data-testid="recipe-photo" src={ recipe.strDrinkThumb } alt="img" />
        }
        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="share icon" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ whiteHeartIcon } alt="favorite" />
        </button>
        {
          arrayRecipes === 'comidas'
            ? <h1 data-testid="recipe-title">{recipe.strMeal}</h1>
            : <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
        }
        {arrayRecipes === 'bebidas'
        && <p data-testid="recipe-category">{recipe.strAlcoholic}</p> }
        <p data-testid="recipe-category">{recipe.strCategory}</p>
        Ingredients
        <IngredientList />
        Instructions
        <p data-testid="instructions">{recipe.strInstructions}</p>
        Video
        {
          arrayRecipes === 'comidas'
          && <iframe
            title="Meat"
            data-testid="video"
            width="420"
            height="315"
            src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
          />
        }
        Recomendadas
        <p data-testid="0-recomendation-card">{recipe.strDrinkAlternate}</p>
        <button data-testid="start-recipe-btn" type="button">Iniciar Receita</button>
      </div>
    );
  };

  if (recipe.length === 0) return <main><span>Loading</span></main>;
  return (
    <main>
      <div>
        {renderMeal()}
      </div>
    </main>
  );
}

export default FoodDetail;
