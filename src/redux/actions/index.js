import FecthDrinks from '../../services/theCocTailDB';
import FecthMeals from '../../services/theMeadlDB';
import {
  GET_API_FOOD,
  FETCH_API_FOODS,
  FETCH_API_DRINKS,
  ERROR_REQUEST_API,
  GET_API_DRINKS,
} from './types';

const setFood = (data) => ({
  type: GET_API_FOOD,
  payload: data,
});

const setDrinks = (data) => ({
  type: GET_API_DRINKS,
  payload: data,
});

const isFetchingFoods = () => ({
  type: FETCH_API_FOODS,
});

const isFetchingDrinks = () => ({
  type: FETCH_API_DRINKS,
});

const errorFetching = (error) => ({
  type: ERROR_REQUEST_API,
  payload: error,
});

export const fetchMealsByFilter = (radio, inputName) => async (dispatch) => {
  dispatch(isFetchingFoods());
  try {
    const apiData = await FecthMeals(radio, inputName);
    dispatch(setFood(apiData));
  } catch (error) {
    dispatch(errorFetching(error));
  }
};

export const fetchDrinksByFilter = (radio, inputName) => async (dispatch) => {
  dispatch(isFetchingDrinks());
  try {
    const apiData = await FecthDrinks(radio, inputName);
    dispatch(setDrinks(apiData));
  } catch (error) {
    dispatch(errorFetching(error));
  }
};
