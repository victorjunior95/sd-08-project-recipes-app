import {
  TOGGLE_BUTTON_SEARCH, TOGGLE_HEADER_TITLE,
  SET_FILTERS_BUTTONS,
} from '../actions/headerAction';

const INITIAL_STATE_USER = {
  showButtonSearch: false,
  filterButtons: [],
};
export default function headerReducer(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case TOGGLE_BUTTON_SEARCH:

    return {
      ...state,
      showButtonSearch: !state.showButtonSearch,
    };
  case TOGGLE_HEADER_TITLE:
    return {
      ...state,
      titleHeader: action.payload.titleHeader, // precisa de titleHeader ??
    };
  case SET_FILTERS_BUTTONS:
    return {
      ...state,
      filterButtons: action.payload.meals,
    };
  default:
    return state;
  }
}
