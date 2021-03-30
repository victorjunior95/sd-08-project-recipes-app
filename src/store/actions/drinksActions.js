import {
  fetchDrinksByIngredients,
  fetchDrinksByName,
  fetchDrinksByLetter,
  fetchDrinksByRandom,
  fetchFilterDrinksByCategories,
  getLocalDrink,
} from '../../services';

export const GET_SEARCH_DRINK = 'GET_SEARCH_DRINK';
export const GET_LOCALSTORAGE_DRINK = 'GET_LOCALSTORAGE_DRINK';

const createDrink = (value) => ({
  ingredient: fetchDrinksByIngredients(value),
  name: fetchDrinksByName(value),
  firstLetter: fetchDrinksByLetter(value),
  filterCategory: fetchFilterDrinksByCategories(value),
});

function getSearchDrink(data) {
  return { type: GET_SEARCH_DRINK, data };
}
function getLocalStorageDrink(payload) {
  return { type: GET_LOCALSTORAGE_DRINK, payload };
}

export const fetchDrink = ({ search, searchRadio }) => (dispatch) => {
  const fetch = createDrink(search);
  fetch[searchRadio].then((data) => dispatch(getSearchDrink(data)));
};
export const fetchDrinksRandom = () => (dispatch) => {
  fetchDrinksByRandom().then((data) => dispatch(getSearchDrink(data)));
};
export const fetchDrinksLocalStorage = () => (dispatch) => {
  const cocktails = getLocalDrink();
  dispatch(getLocalStorageDrink(cocktails));
};
