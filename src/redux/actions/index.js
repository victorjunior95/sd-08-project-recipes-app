import FecthMeals from '../../services/theMeadlDB';
import { API_FOOD, FETCH_API, ERROR_REQUEST_API } from './types';

export const setFood = (data) => ({
  type: API_FOOD,
  payload: data,
});

const isFetching = () => ({
  type: FETCH_API,
});

const errorFetching = (error) => ({
  type: ERROR_REQUEST_API,
  payload: error,
});
export const fetchMealsByFilter = (radio, inputName) => async (dispatch) => {
  dispatch(isFetching());
  try {
    const apiData = await FecthMeals(radio, inputName);
    dispatch(setFood(apiData));
  } catch (error) {
    dispatch(errorFetching(error));
  }
};
