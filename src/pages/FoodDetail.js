import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import fetchMealActionId from '../redux/actions/fetchMealId';
import fetchDrinkActionId from '../redux/actions/fetchDrink';
import ShareButton from '../components/ShareButton';
import LikeButton from '../components/LikeButton';
import Recomendation from '../components/Recomendation';
import { clearSingleRecipe } from '../redux/actions/clearRecipesAction';
import IngredientList from '../components/IngredientList';
import '../CSS/foodDetail.css';
import BeginContinueRecipeBtn from '../components/BeginContinueRecipeBtn';

function FoodDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = history.location;
  const arrayId = pathname.split('/')[2];
  const type = (pathname.split('/')[1] === 'comidas') ? 'Meal' : 'Drink';
  const { singleRecipe } = useSelector((state) => state.recipes);

  useEffect(() => {
    let fetchData;
    if (pathname.split('/')[1] === 'comidas' && singleRecipe.length === 0) {
      fetchData = (id) => dispatch(fetchMealActionId(id));
      fetchData(arrayId);
    }
    if (pathname.split('/')[1] === 'bebidas' && singleRecipe.length === 0) {
      fetchData = (id) => dispatch(fetchDrinkActionId(id));
      fetchData(arrayId);
    }
  }, []);

  useEffect(() => () => dispatch(clearSingleRecipe()), []);

  const recipe = singleRecipe && singleRecipe[0];

  const renderMeal = () => recipe !== undefined && (
    <div>
      <img data-testid="recipe-photo" src={ recipe[`str${type}Thumb`] } alt="img" />
      <ShareButton recipeId={ recipe.idMeal } recipeType="comida" />
      <LikeButton recipe={ recipe } />
      <h1 data-testid="recipe-title">{recipe[`str${type}`]}</h1>
      {type === 'Drink'
        && <p data-testid="recipe-category">{recipe.strAlcoholic}</p> }
      <p data-testid="recipe-category">{recipe.strCategory}</p>
      Ingredients
      <IngredientList />
      Instructions
      <p data-testid="instructions">{recipe.strInstructions}</p>
      Video
      {
        type === 'Meal'
          && <iframe
            title="Meat"
            data-testid="video"
            width="420"
            height="315"
            src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
          />
      }
      Recomendadas
      <Recomendation />
      <BeginContinueRecipeBtn />
    </div>
  );

  return (
    <main>
      <div>
        {renderMeal()}
      </div>
    </main>
  );
}

export default FoodDetail;
