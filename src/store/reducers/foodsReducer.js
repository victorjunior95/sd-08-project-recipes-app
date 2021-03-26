import { GET_SEARCH_FOOD } from '../actions/foodsActions';
import { alertSearch } from '../../serviceWorker';

const INITIAL_STATE = {
  meals: [],
  categories: [],

};

export default function foodsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SEARCH_FOOD:
    if (action.data.meals === null) {
      alertSearch();
      return { ...state };
    }
    return {
      ...state,
      meals: action.data.meals,
      categories: action.data.categories.meals,
    };
  default:
    return state;
  }
}
