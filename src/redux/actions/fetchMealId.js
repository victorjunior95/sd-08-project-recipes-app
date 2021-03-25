import { fetchMealId } from '../../services/MealAPI';

import { FETCH_API } from './index';

const fetchMealAction = (recipes) => ({
  type: FETCH_API,
  payload: {
    recipes,
  },
});

const fetchMealActionId = (id) => async (dispatch) => {
  const { meals } = await fetchMealId(id);
  dispatch(fetchMealAction(meals));
};

export default fetchMealActionId;
