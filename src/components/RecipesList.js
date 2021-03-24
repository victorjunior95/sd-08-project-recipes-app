import React, { useContext, useEffect, useState } from 'react';
import {
  requestRecipesList,
  requestRecipesByIngredient,
  requestRecipesByNameOrFirstLetter,
} from '../services/apiRequests';
import RecipesCard from './RecipesCard';
import Context from '../context/Context';

function RecipesList() {
  const { searchParams, inputValue } = useContext(Context);
  const [allMeals, setAllMeals] = useState([]);
  const MAX_INDEX = 11;
  useEffect(() => {
    async function requestRecipes(searchFilter, value) {
      if (searchFilter === '') {
        const meals = await requestRecipesList();
        setAllMeals(meals);
      } else if (searchFilter === 'ingrediente') {
        const meals = await requestRecipesByIngredient(value);
        setAllMeals(meals);
      } else if (searchFilter === 'primeira-letra') {
        const meals = await requestRecipesByNameOrFirstLetter('f', value);
        setAllMeals(meals);
      } else {
        const meals = await requestRecipesByNameOrFirstLetter('s', value);
        setAllMeals(meals);
      }
    }
    requestRecipes(searchParams, inputValue);
  }, [searchParams, inputValue]);
  return (
    <main>
      {
        allMeals !== null || undefined
          ? allMeals.map((meal, index) => {
            if (index <= MAX_INDEX) {
              return <RecipesCard key={ meal.idMeal } meal={ meal } index={ index } />;
            }
            return '';
          })
          : '' // alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
      }
    </main>
  );
}

export default RecipesList;
