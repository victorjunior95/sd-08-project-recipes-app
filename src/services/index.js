export {
  setMealsTokenLocalStorage,
  setCocktailsTokenLocalStorage,
  setUserLocalStorage,
  setDoneRecipes,
  setFavoriteRecipe,
  setInProgressRecipe,
  getProfileEmailLocalStorage,
  deleteKeyLocalStorage,
  setProgressDrink,
  getArrayIngredients,
  getLocalDrink,

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
  fetchFilterDrinksByCategories,
  fetchFilterFoodsByCategories,
  fetchDrinkDetails,
  default as fetchAPI,
} from './fetchData';
