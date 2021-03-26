import { GET_SEARCH_DRINK } from '../actions/drinksActions';
import { alertSearch } from '../../serviceWorker';

const INITIAL_STATE = {
  drinks: [],
  categories: [],
};

export default function drinksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SEARCH_DRINK:
    if (action.data.drinks === null) {
      alertSearch();
      return { ...state };
    }
    return {
      ...state,
      drinks: action.data.drinks,
      categories: action.data.categories.drinks,
    };
  default:
    return state;
  }
}
