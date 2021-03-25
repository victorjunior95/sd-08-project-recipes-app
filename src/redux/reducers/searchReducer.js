import { CLEAR_SEARCH, FETCH_AREA_API, SEARCH_INPUT } from '../actions';

const INITIAL_STATE = {
  inputValue: '',
  inputType: '',
  areas: '',
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
  case FETCH_AREA_API:
    return {
      ...state,
      areas: payload.area,
    };
  default:
    return state;
  }
}
