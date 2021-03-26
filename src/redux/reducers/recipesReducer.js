import { CLEAR_API, FETCH_API, FETCH_CATEGORIES,
  FETCH_CAT_RECIPES, FETCH_INGREDIENTS, FILTER_DRINK_CAT,
  FILTER_INGREDIENT, FILTER_MEAL_CAT } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  categories: [],
  drinkFilter: '',
  mealFilter: '',
  ingredients: [],
  ingredientFilter: '',
};

export default function recipesReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_API:
    return {
      ...state,
      recipes: payload.recipes,
    };
  case CLEAR_API:
    return {
      ...state,
      recipes: [],
      ingredientFilter: '',
    };
  case FETCH_CATEGORIES:
    return {
      ...state,
      categories: payload.categories,
    };
  case FILTER_DRINK_CAT:
    return {
      ...state,
      drinkFilter: payload.drinkFilter,
    };
  case FILTER_MEAL_CAT:
    return {
      ...state,
      mealFilter: payload.mealFilter,
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
  case FILTER_INGREDIENT:
    return {
      ...state,
      ingredientFilter: payload.ingredient,
    };
  default:
    return state;
  }
}
