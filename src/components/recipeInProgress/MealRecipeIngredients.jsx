import React from 'react';
import { filterSteps } from '../../core';
// import api from '../../services';
import data from './data';

const MealRecipeIngredients = () => {
  // const [recipe, setRecipe] = useState([]);
  // const [recipeData, setRecipeData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes'));
  //   console.log(meals[Object.keys(meals)[0]]);
  //   // const mealId = Object.keys(meals)[0];
  //   // console.log(mealId);
  //   setRecipeData(meals[Object.keys(meals)[0]]);
  //   // api.fetchMealById(mealId)
  //   //   .then((response) => response.json()).then((result) => setRecipeData(result.meals));
  // }, []);
  // useEffect(() => {
  //   if (recipeData.length > 0) {
  //     setLoading(false);
  //   }
  // }, [recipeData]);
  const recipe = [data[0]];
  // const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // const recipe = meals[Object.keys(meals)[0]];
  console.log(recipe);
  return (
    <div>
      <div>
        <p>Ingredients</p>
        <ol>
          {filterSteps(recipe[0])}
        </ol>
      </div>
    </div>
  );
};

export default MealRecipeIngredients;
