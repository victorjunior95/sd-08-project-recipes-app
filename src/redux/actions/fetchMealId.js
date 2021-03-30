import { fetchMealId } from '../../services/MealAPI';

import { FETCH_RECIPE_ID } from './index';

const fetchMealAction = (recipes) => ({
  type: FETCH_RECIPE_ID,
  payload: {
    recipes,
  },
});

const fetchMealActionId = (id) => async (dispatch) => {
  const { meals } = await fetchMealId(id);
  dispatch(fetchMealAction(meals));
};

export default fetchMealActionId;
