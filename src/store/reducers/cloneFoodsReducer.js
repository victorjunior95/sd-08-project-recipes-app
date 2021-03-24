import {
  START_REQUEST_FOODS_RECIPE,
  REQUEST_FOODS_RECIPE_ERROR,
  REQUEST_FOODS_RECIPE_SUCCESS,

} from '../actions/cloneFoodsActions';

import { alertSearch } from '../../serviceWorker';

const INITIAL_STATE = {
  recipes: [],
  isFetching: false,
};

export default function cloneFoodsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_REQUEST_FOODS_RECIPE:
    return {
      ...state, isFetching: true,
    };
  case REQUEST_FOODS_RECIPE_SUCCESS:
    if (action.recipes.meals === null) {
      alertSearch();
      return { ...state, isFetching: false };
    }
    return { ...state, recipes: action.recipes, isFetching: false };
  case REQUEST_FOODS_RECIPE_ERROR:
    return { ...state, isFetching: false, error: action.error };
  default:
    return state;
  }
}
