import { CLEAR_SEARCH, SEARCH_INPUT } from '../actions';

const INITIAL_STATE = {
  inputValue: '',
  inputType: '',
};

export default function searchBar(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
  case SEARCH_INPUT:
    return {
      ...state,
      inputValue: payload.search.inputValue,
      inputType: payload.search.inputType,
    };
  case CLEAR_SEARCH:
    return {
      ...state,
      inputValue: '',
      inputType: '',
    };
  default:
    return state;
  }
}
