import React from 'react';
// import api from '../../services/index';
// import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import data from './data';

import { initLocalStorage } from '../../core';

const MealRecipeTop = () => {
  initLocalStorage();

  // const [recipe, setRecipe] = useState([]);
  // const [recipeData, setRecipeData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes'));
  //   console.log(meals[Object.keys(meals)[0]]);
  //   // const mealId = Object.keys(meals)[0];
  //   // console.log(mealId);
  //   setRecipeData(meals[Object.keys(meals)[0]]);
  // }, []);
  // useEffect(() => {
  //   if (recipeData.length > 0) {
  //     setLoading(false);
  //   }
  // }, [recipeData]);
  // useEffect(() => {
  //   initLocalStorage();
  // }, []);
  // const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // const recipe = meals[Object.keys(meals)[0]];
  const recipe = [data[0]];
  // const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // const recipe = meals[Object.keys(meals)[0]];
  console.log(recipe);
  return (
    <div>
      <div>
        <img
          src={ recipe[0].strMealThumb }
          alt={ recipe[0].strMealThumb }
          data-testid="recipe-photo"
        />
      </div>
      <div>
        <div>
          <h3 data-testid="recipe-title">{recipe[0].strMeal}</h3>
          <p data-testid="recipe-category">{recipe[0].strCategory}</p>
        </div>
        <div>
          <button type="button" data-testid="share-btn">
            <img src={ shareIcon } alt={ shareIcon } />
          </button>
          <button type="button" data-testid="favorite-btn">
            <img src={ whiteHeartIcon } alt={ whiteHeartIcon } />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealRecipeTop;
