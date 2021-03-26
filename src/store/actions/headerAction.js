import { fetchFoodsByCategories, fetchDrinksByCategories } from '../../services';

export const TOGGLE_BUTTON_SEARCH = 'TOGGLE_BUTTON_SEARCH';
export const TOGGLE_HEADER_TITLE = 'TOGGLE_HEADER_TITLE';
export const SET_FILTERS_FOODS_BUTTONS = 'SET_FILTERS_FOODS_BUTTONS';
export const SET_FILTERS_DRINKS_BUTTONS = 'SET_FILTERS_DRINKS_BUTTONS';

export const toggleButtonSearch = (payload) => ({
  type: TOGGLE_BUTTON_SEARCH, payload });

export const toggleHeaderTitle = (payload) => ({
  type: TOGGLE_HEADER_TITLE, payload });

const setFiltersFoodsButtons = (payload) => ({
  type: SET_FILTERS_FOODS_BUTTONS, payload });

const setFiltersDrinksButtons = (payload) => ({
  type: SET_FILTERS_DRINKS_BUTTONS, payload });

export const fetchFoodCategory = () => (dispatch) => {
  fetchFoodsByCategories().then((data) => dispatch(setFiltersFoodsButtons(data)));
};
export const fetchDrinkCategory = () => (dispatch) => {
  fetchDrinksByCategories().then((data) => dispatch(setFiltersDrinksButtons(data)));
};

// export const fetchFoodsRandom = () => (dispatch) => {
//   fetchFoodsByRandom().then((data) => dispatch(getSearchFood(data)));
// };
