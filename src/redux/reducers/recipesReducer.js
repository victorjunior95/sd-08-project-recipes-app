import { CLEAR_API, FETCH_API } from '../actions';

const INITIAL_STATE = {
  recipes: [],
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
  default:
    return state;
  }
}
