import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestMealRecipe } from '../services/apiRequests';

function Detalhes() {
  const params = useParams();
  const { id } = params;
  const [meal, setMeal] = useState([]);

  console.log(params.id);

  useEffect(() => {
    async function requestById() {
      console.log('teste', id);
      const clickedRecipe = await requestMealRecipe(id);
      console.log('clickedRecipe:', clickedRecipe);
      setMeal(clickedRecipe);
    }
    requestById();
  }, [id]);

  console.log('teste meal array:', meal[0]);
  return (
    <div>
      <h1>Detalhes</h1>
      <img src={ meal.strMealThumb } alt="imagem" data-testid="recipe-photo" />

    </div>
  );
}

// const [allMeals, setAllMeals] = useState([]);
// const MAX_INDEX = 11;
// useEffect(() => {
//   async function requestRecipes() {
//     const meals = await requestRecipesList();
//     setAllMeals(meals);
//   }
//   requestRecipes();
// }, []);

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

export default Detalhes;
