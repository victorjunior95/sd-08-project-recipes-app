import { GET_SEARCH_DRINK } from '../actions/drinksActions';

const INITIAL_STATE = {
  data: [],
  notDrinksFound: false,
};

export default function drinksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SEARCH_DRINK:
    if (action.data === null) {
      return { ...state, notDrinksFound: true };
    }
    return { ...state, data: action.data, notDrinksFound: false };
  default:
    return state;
  }
}
