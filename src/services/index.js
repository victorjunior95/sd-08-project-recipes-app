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
  fetchFoodsByCategories,
  fetchFoodsByRegion,
  fetchFoodsByIngredients,
  fetchFoodsByName,
  fetchFoodsByLetter,
  fetchDrinksByCategories,
  fetchDrinksByIngredients,
  fetchDrinksByName,
  fetchDrinksByLetter,
  default as fetchAPI,
} from './fetchData';
