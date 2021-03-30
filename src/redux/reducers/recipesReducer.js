import { FETCH_API, FETCH_CATEGORIES, CLEAR_RECIPES,
  FETCH_CAT_RECIPES, FETCH_INGREDIENTS, FETCH_RECIPE_ID } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  categories: [],
  ingredients: [],
  singleRecipe: '',
};

export default function recipesReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_API:
    return {
      ...state,
      recipes: payload.recipes,
    };
  case CLEAR_RECIPES:
    return {
      ...state,
      recipes: [],
    };
  case FETCH_CATEGORIES:
    return {
      ...state,
      categories: payload.categories,
    };
  case FETCH_CAT_RECIPES:
    return {
      ...state,
      recipes: payload.filteredRecipes,
    };
  case FETCH_INGREDIENTS:
    return {
      ...state,
      ingredients: payload.ingredients,
    };
  case FETCH_RECIPE_ID:
    return {
      ...state,
      singleRecipe: payload.recipe,
    };
  default:
    return state;
  }
}
