export {
  setMealsTokenLocalStorage,
  setCocktailsTokenLocalStorage,
  setUserLocalStorage,
  setDoneRecipes,
  setFavoriteRecipe,
  setInProgressRecipe,
  getProfileEmailLocalStorage,
  deleteKeyLocalStorage,
} from './localStorage';

export {
  fetchFoodsByRandom,
  fetchFoodsByCategories,
  fetchFoodsByRegion,
  fetchFoodsByIngredients,
  fetchFoodsByName,
  fetchFoodsByLetter,
  fetchDrinksByRandom,
  fetchDrinksByCategories,
  fetchDrinksByIngredients,
  fetchDrinksByName,
  fetchDrinksByLetter,
  default as fetchAPI,
} from './fetchData';
