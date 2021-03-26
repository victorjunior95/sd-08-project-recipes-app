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
  fetchFoodDetails,
  fetchDrinksByRandom,
  fetchDrinksByCategories,
  fetchDrinksByIngredients,
  fetchDrinksByName,
  fetchDrinksByLetter,
  fetchDrinkDetails,
  default as fetchAPI,
} from './fetchData';
