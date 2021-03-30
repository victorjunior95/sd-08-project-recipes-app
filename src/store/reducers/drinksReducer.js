import { GET_SEARCH_DRINK, GET_LOCALSTORAGE_DRINK } from '../actions/drinksActions';
import { alertSearch } from '../../serviceWorker';

const INITIAL_STATE = {
  data: [],
  inProgress: { cocktails: {} },
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
      data: action.data,
    };
  case GET_LOCALSTORAGE_DRINK:
    return {
      ...state,
      inProgress: action.payload,
    };

  default:
    return state;
  }
}
