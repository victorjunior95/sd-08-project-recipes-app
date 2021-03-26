import {
  fetchFoodsByLetter,
  fetchFoodsByName,
  fetchFoodsByIngredients,
  fetchFoodsByRandom,
  fetchFoodsByCategories,
} from '../../services';

export const GET_SEARCH_FOOD = 'GET_SEARCH_FOOD';

const createFood = (value) => ({
  ingredient: fetchFoodsByIngredients(value),
  name: fetchFoodsByName(value),
  firstLetter: fetchFoodsByLetter(value),
});

function getSearchFood(data) {
  return { type: GET_SEARCH_FOOD, data };
}

export const fetchFood = ({ search, searchRadio }) => (dispatch) => {
  const fetch = createFood(search);
  fetch[searchRadio].then((data) => dispatch(getSearchFood(data)));
};

export const fetchFoodsRandom = () => (dispatch) => {
  Promise.all(
    [fetchFoodsByRandom(),
      fetchFoodsByCategories()],
  )
    .then((data) => {
      const meals = data[0];
      const categories = data[1];
      dispatch(getSearchFood({
        ...meals, categories,
      }));
    });
};
