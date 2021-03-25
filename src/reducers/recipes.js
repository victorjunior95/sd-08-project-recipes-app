import { ADD_CATEGORIES, ADD_FILTER, ADD_RECIPES,
  ADD_RECOMMENDATIONS, REQUEST_RECIPES, ADD_BYINGREDIENT } from '../actions';

const INITIAL_STATE = {
  list: [],
  isFetching: true,
  categories: [],
  filter: '',
  recommendations: [],
  byIngredient: '',
};

const MAX_RECIPES = 12;
const MAX_RECOMMENDATIONS = 6;

const recipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_RECIPES:
    return { ...state, isFetching: true };
  case ADD_RECIPES:
    return { ...state, isFetching: false, list: action.payload.slice(0, MAX_RECIPES) };
  case ADD_CATEGORIES:
    return { ...state, categories: action.payload };
  case ADD_FILTER:
    return { ...state, filter: action.payload };
  case ADD_RECOMMENDATIONS:
    return { ...state, recommendations: action.payload.slice(0, MAX_RECOMMENDATIONS) };
  case ADD_BYINGREDIENT:
    return { ...state, byIngredient: action.payload };
  default:
    return state;
  }
};

export default recipes;
