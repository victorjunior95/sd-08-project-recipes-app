import { fetchDrinkId } from '../../services/MealAPI';

import { FETCH_API } from './index';

const fetchMealAction = (recipes) => ({
  type: FETCH_API,
  payload: {
    recipes,
  },
});

const fetchDrinkActionId = (id) => async (dispatch) => {
  const { drinks } = await fetchDrinkId(id);
  dispatch(fetchMealAction(drinks));
};

export default fetchDrinkActionId;
