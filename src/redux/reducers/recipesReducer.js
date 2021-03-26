import { CLEAR_API, FETCH_API, FETCH_CATEGORIES,
  FETCH_CAT_RECIPES, FILTER_DRINK_CAT, FILTER_MEAL_CAT } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  categories: [],
  drinkFilter: '',
  mealFilter: '',
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
  default:
    return state;
  }
}
