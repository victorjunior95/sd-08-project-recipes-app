// Requisição tela principal receitas
const MAIN_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
// const MAIN_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const requestMealRecipe = () => (
  fetch(MAIN_MEAL_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default requestMealRecipe;
