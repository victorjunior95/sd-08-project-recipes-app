import {
  fetchDrinksByIngredients,
  fetchDrinksByName,
  fetchDrinksByLetter,
  fetchDrinksByRandom,
  fetchFilterDrinksByCategories,
} from '../../services';

export const GET_SEARCH_DRINK = 'GET_SEARCH_DRINK';

const createDrink = (value) => ({
  ingredient: fetchDrinksByIngredients(value),
  name: fetchDrinksByName(value),
  firstLetter: fetchDrinksByLetter(value),
  filterCategory: fetchFilterDrinksByCategories(value),
});

function getSearchDrink(data) {
  return { type: GET_SEARCH_DRINK, data };
}

export const fetchDrink = ({ search, searchRadio }) => (dispatch) => {
  const fetch = createDrink(search);
  fetch[searchRadio].then((data) => dispatch(getSearchDrink(data)));
};
export const fetchDrinksRandom = () => (dispatch) => {
  fetchDrinksByRandom().then((data) => dispatch(getSearchDrink(data)));
};
