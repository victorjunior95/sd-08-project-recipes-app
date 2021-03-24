import { GET_SEARCH_FOOD } from '../actions/foodsActions';
import { alertSearch } from '../../serviceWorker';

const INITIAL_STATE = {
  data: [],
};

export default function foodsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SEARCH_FOOD:
    if (action.data.meals === null) {
      alertSearch();
      return { ...state };
    }
    return { ...state, data: action.data };
  default:
    return state;
  }
}
