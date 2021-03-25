import {
  TOGGLE_BUTTON_SEARCH, TOGGLE_HEADER_TITLE,
} from '../actions/headerAction';

const INITIAL_STATE_USER = {
  showButtonSearch: false,
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
      titleHeader: action.payload.titleHeader,
    };
  default:
    return state;
  }
}
