import { FINAL_INDEX, INITIAL_INDEX } from '../common/defs';

const getMeals = async (type, payload) => {
  console.log(type);
  console.log(payload);
  let data = {};
  switch (type) {
  case 'ingredient-search':
    data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${payload}`);
    break;
  case 'name-search':
    data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${payload}`);
    break;
  case 'first-letter-search':
    data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${payload}`);
    break;
  case 'category':
    data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${payload}`);
    break;
  default: return null;
  }
  const meals = await (data.json());
  return meals;
};

const getCocktails = async (type, payload) => {
  let data = {};
  switch (type) {
  case 'ingredient-search':
    data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${payload}`);
    break;
  case 'name-search':
    data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${payload}`);
    break;
  case 'first-letter-search':
    data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${payload}`);
    break;
  case 'category':
    data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${payload}`);
    break;
  default: return null;
  }
  const cocktails = await (data.json());
  return cocktails;
};

const getMealsList = async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const dataJSON = await data.json();
  const mealsList = dataJSON.meals;
  const topFiveMeals = mealsList.slice(INITIAL_INDEX, FINAL_INDEX);
  return (topFiveMeals.map((meal) => meal.strCategory));
};

const getCocktailsList = async () => {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const dataJSON = await data.json();
  const cocktailsList = dataJSON.drinks;
  const topFiveCocktails = cocktailsList.slice(INITIAL_INDEX, FINAL_INDEX);
  return (topFiveCocktails.map((cocktail) => cocktail.strCategory));
};

export { getMeals, getCocktails, getMealsList, getCocktailsList };
