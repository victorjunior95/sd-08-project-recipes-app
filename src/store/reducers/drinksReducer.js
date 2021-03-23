import { GET_SEARCH_DRINK } from '../actions/drinksActions';

const INITIAL_STATE = {
  data: '',
};

export default function drinksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SEARCH_DRINK:
    return { ...state, data: action.data };
  default:
    return state;
  }
}
