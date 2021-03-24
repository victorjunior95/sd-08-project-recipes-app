import { fetchMealByFirstLetter,
  fetchMealByIngredients, fetchMealByName } from '../../services/MealAPI';
import { FETCH_API } from './index';

const fetchMealAction = (recipes) => ({
  type: FETCH_API,
  payload: {
    recipes,
  },
});

const fetchMealThunk = (input, type) => async (dispatch) => {
  if (!type && !input) {
    const { meals } = await fetchMealByName(input);
    dispatch(fetchMealAction(meals));
  }
  if (type === 'name') {
    const { meals } = await fetchMealByName(input);
    dispatch(fetchMealAction(meals));
  }
  if (type === 'ingredient') {
    const { meals } = await fetchMealByIngredients(input);
    dispatch(fetchMealAction(meals));
  }
  if (type === 'first-letter') {
    const { meals } = await fetchMealByFirstLetter(input);
    dispatch(fetchMealAction(meals));
  }
};

export default fetchMealThunk;
