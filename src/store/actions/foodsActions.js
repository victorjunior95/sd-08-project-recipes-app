import {
  fetchFoodsByLetter,
  fetchFoodsByName,
  fetchFoodsByIngredients,
} from '../../services';

export const FETCH_FOOD = 'FETCH_FOOD';
export const GET_SEARCH_FOOD = 'GET_SEARCH_FOOD';

const create = (value) => ({
  ingredient: fetchFoodsByIngredients(value),
  name: fetchFoodsByName(value),
  firstLetter: fetchFoodsByLetter(value),
});

function getSearchFood(data) {
  return { type: GET_SEARCH_FOOD, data };
}

export const fetchFood = ({ search, searchRadio }) => (dispatch) => {
  const fetch = create(search);
  fetch[searchRadio].then((data) => console.log(data) || dispatch(getSearchFood(data)));
};
