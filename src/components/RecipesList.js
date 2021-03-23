import React, { useEffect, useState } from 'react';
import { requestRecipesList } from '../services/apiRequests';
import RecipesCard from './RecipesCard';

function RecipesList() {
  const [allMeals, setAllMeals] = useState([]);
  const MAX_INDEX = 11;
  useEffect(() => {
    async function requestRecipes() {
      const meals = await requestRecipesList();
      setAllMeals(meals);
    }
    requestRecipes();
  }, []);
  return (
    <main>
      {
        allMeals.map((meal, index) => {
          if (index <= MAX_INDEX) {
            return <RecipesCard key={ meal.idMeal } meal={ meal } index={ index } />;
          }
          return '';
        })
      }
    </main>
  );
}

export default RecipesList;
