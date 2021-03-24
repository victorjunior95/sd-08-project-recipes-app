import { GET_SEARCH_FOOD } from '../actions/foodsActions';

const INITIAL_STATE = {
  data: '',
};

export default function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SEARCH_FOOD:
    return { ...state, data: action.data };
  default:
    return state;
  }
}
