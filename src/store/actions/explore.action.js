import {
  getMealsByRandom,
  getDrinksByRandom,
  getMealsByRegion,
  getDrinksByRegion,
  getMealsDetails,
  getDrinksDetails,
  getMealsIngredients,
  getDrinksIngredients,
  getMealsByName,
  getDrinksByName,
} from '../../services';

import {
  RECIPE_FETCH,
  // RECIPE_FETCH_SUCCESS_DATA,
  RECIPE_FETCH_SUCCESS,
  RECIPE_FETCH_ERROR,
} from './constants';

export const INGREDIENTS = 'INGREDIENTS';
export const REGIONS = 'REGIONS';
export const RECIPES_BY_INGREDIENT = 'RECIPES_BY_INGREDIENT';
export const EXPLORE_INGREDIENTS = 'EXPLORE_INGREDIENTS';
export const RECIPES_BY_REGION = 'RECIPES_BY_REGION';

export const RANDOM_RECIPE_ERROR = 'RANDOM_RECIPE_ERROR';
export const INGREDIENTS_ERROR = 'INGREDIENT_ERRORS';
export const REGIONS_ERROR = 'REGIONS_RECIPE';
export const RECIPES_BY_INGREDIENT_ERROR = 'RECIPES_BY_INGREDIENT_ERROR';
export const RECIPES_BY_REGION_ERROR = 'RECIPES_BY_REGION_ERROR';

export const RANDOM_RECIPE_FETCHING = 'RANDOM_RECIPE_FETCHING';
export const INGREDIENTS_FETCHING = 'INGREDIENT_FETCHINGS';
export const REGIONS_FETCHING = 'REGIONS_RECIPE';
export const RECIPES_BY_INGREDIENT_FETCHING = 'RECIPES_BY_INGREDIENT_FETCHING';
export const RECIPES_BY_REGION_FETCHING = 'RECIPES_BY_REGION_FETCHING';

const recipeFetch = () => ({
  type: RECIPE_FETCH,
});

const recipeFetchSuccess = (payload) => ({
  type: RECIPE_FETCH_SUCCESS,
  payload,
});

const recipeFetchErrored = (error) => ({
  type: RECIPE_FETCH_ERROR,
  error,
});

export const getRandomRecipe = (type) => (dispatch) => {
  const fetcher = type === 'comidas'
    ? getMealsByRandom
    : getDrinksByRandom;
  dispatch(recipeFetch());
  fetcher()
    .then((recipe) => {
      const data = type === 'comidas'
        ? recipe.meals
        : recipe.drinks;
      console.log('getIngredients', recipe);
      dispatch(recipeFetchSuccess(data));
    })
    .catch((error) => dispatch(recipeFetchErrored(error)));
};

export const getIngredients = (type) => (dispatch) => {
  const fetcher = type === EXPLORE_INGREDIENTS
    ? getMealsIngredients
    : getDrinksIngredients;

  dispatch(recipeFetch());
  fetcher()
    .then((ingre) => {
      console.log('getIngredients', ingre);
      const data = type === EXPLORE_INGREDIENTS
        ? ingre.meals
        : ingre.drinks;
      dispatch(recipeFetchSuccess(data));
    })
    .catch((error) => dispatch(recipeFetchErrored(error)));
};

export const getRecipesByingredient = (id, type) => (dispatch) => {
  const fetcher = type === EXPLORE_INGREDIENTS
    ? getMealsDetails
    : getDrinksDetails;
  dispatch(recipeFetch());
  fetcher(id)
    .then((result) => {
      const data = type === EXPLORE_INGREDIENTS
        ? result.meals
        : result.drinks;
      console.log('getRecipesByingredient', result);
      dispatch(recipeFetchSuccess(data));
    })
    .catch((error) => dispatch(recipeFetchErrored(error)));
};

export const getRegionRecipe = () => (dispatch) => {
  dispatch(recipeFetch());
  getMealsByRegion
    .then((recipe) => {
      console.log('getRegionRecipe', recipe);
      dispatch(recipeFetchSuccess(recipe.meals));
    })
    .catch((error) => dispatch(recipeFetchErrored(error)));
};

export const getExploreMealsByRegion = (region) => (dispatch) => {
  const fetcher = REGIONS === 'All' ? getMealsByName : getMealsByRegion;
  dispatch(recipeFetch());
  fetcher(region)
    .then((recipe) => {
      console.log('getExploreMealsByRegion', recipe);
      dispatch(recipeFetchSuccess(recipe.meals));
    })
    .catch((error) => dispatch(recipeFetchErrored(error)));
};

export const getExploreDrinksByRegion = (region) => (dispatch) => {
  const fetcher = REGIONS === 'All' ? getDrinksByName : getDrinksByRegion;
  dispatch(recipeFetch());
  fetcher(region)
    .then((recipe) => {
      console.log('getExploreDrinksByRegion', recipe);
      dispatch(recipeFetchSuccess(recipe));
    })
    .catch((error) => dispatch(recipeFetchErrored(error)));
};
