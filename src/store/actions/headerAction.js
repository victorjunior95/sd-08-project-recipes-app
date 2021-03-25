import { fetchFoodsByCategories } from '../../services';

export const TOGGLE_BUTTON_SEARCH = 'TOGGLE_BUTTON_SEARCH';
export const TOGGLE_HEADER_TITLE = 'TOGGLE_HEADER_TITLE';
export const SET_FILTERS_BUTTONS = 'SET_FILTERS_BUTTONS';

export const toggleButtonSearch = (payload) => ({
  type: TOGGLE_BUTTON_SEARCH, payload });

export const toggleHeaderTitle = (payload) => ({
  type: TOGGLE_HEADER_TITLE, payload });

const setFiltersButtons = (payload) => ({
  type: SET_FILTERS_BUTTONS, payload });

export const fetchFoodCategory = () => (dispatch) => {
  fetchFoodsByCategories().then((data) => dispatch(setFiltersButtons(data)));
};

// export const fetchFoodsRandom = () => (dispatch) => {
//   fetchFoodsByRandom().then((data) => dispatch(getSearchFood(data)));
// };
