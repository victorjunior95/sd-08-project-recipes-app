import {
  fetchDrinksByIngredients,
  fetchDrinksByName,
  fetchDrinksByLetter,
} from '../../services';

export const GET_SEARCH_DRINK = 'GET_SEARCH_DRINK';

const createDrink = (value) => ({
  ingredient: fetchDrinksByIngredients(value),
  name: fetchDrinksByName(value),
  firstLetter: fetchDrinksByLetter(value),
});

function getSearchDrink(data) {
  return { type: GET_SEARCH_DRINK, data };
}

export const fetchDrink = ({ search, searchRadio }) => (dispatch) => {
  const fetch = createDrink(search);
  fetch[searchRadio].then((data) => console.log(data) || dispatch(getSearchDrink(data)));
};
