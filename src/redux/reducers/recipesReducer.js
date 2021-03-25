import { CLEAR_API, FETCH_API, FETCH_CATEGORIES } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  categories: [],
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
  default:
    return state;
  }
}
