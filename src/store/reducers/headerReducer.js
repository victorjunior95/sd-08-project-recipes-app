import {
  SHOW_HEADER_ACTION,
} from '../actions/showHeaderAction';

const INITIAL_STATE_USER = {
  titleHeader: 'Title',
  showButtonSearch: false,
};
export default function headerReducer(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case SHOW_HEADER_ACTION:
    return {
      ...state,
      titleHeader: action.payload.titleHeader,
      showButtonSearch: action.payload.showButtonSearch,
    };
  default:
    return state;
  }
}
