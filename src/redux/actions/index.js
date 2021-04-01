import {
  FecthDrinks,
  FetchDrinksOnMount,
  fetchDrinksCategories,
} from '../../services/theCockTailDB';
import {
  FecthMeals,
  FetchFoodsCategories,
  FetchFoodsOnMount,
} from '../../services/theMeadlDB';
import {
  GET_API_FOOD,
  FETCH_API_FOODS,
  FETCH_API_CATEGORIES,
  FETCH_API_DRINKS,
  ERROR_REQUEST_API_FOODS,
  GET_API_DRINKS,
  ERROR_REQUEST_API_DRINKS,
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

export const isFetchingCategories = () => ({
  type: FETCH_API_CATEGORIES,
});

const isFetchingDrinks = () => ({
  type: FETCH_API_DRINKS,
});

const errorFetchingFoods = (error) => ({
  type: ERROR_REQUEST_API_FOODS,
  payload: error,
});

const errorFetchingDrinks = (error) => ({
  type: ERROR_REQUEST_API_DRINKS,
  payload: error,
});

export const fetchMealsByFilter = (radio, inputName) => async (dispatch) => {
  dispatch(isFetchingFoods());
  try {
    const apiData = await FecthMeals(radio, inputName);
    const data = { meals: apiData, categories: [] };
    dispatch(setFood(data));
  } catch (error) {
    dispatch(errorFetchingFoods(error));
  }
};

export const fetchDrinksByFilter = (radio, inputName) => async (dispatch) => {
  dispatch(isFetchingDrinks());
  try {
    const apiData = await FecthDrinks(radio, inputName);
    const data = { drinks: apiData, categories: [] };
    dispatch(setDrinks(data));
  } catch (error) {
    dispatch(errorFetchingDrinks(error));
  }
};

export const drinksOnMount = () => async (dispatch) => {
  dispatch(isFetchingDrinks());
  try {
    const apiData = await FetchDrinksOnMount();
    const apiCategories = await fetchDrinksCategories();
    const data = { drinks: apiData, categories: apiCategories };
    dispatch(setDrinks(data));
  } catch (error) {
    dispatch(errorFetchingDrinks(error));
  }
};

export const foodsOnMount = () => async (dispatch) => {
  dispatch(isFetchingFoods());
  try {
    const apiData = await FetchFoodsOnMount();
    const apiCategories = await FetchFoodsCategories();
    const data = { meals: apiData, categories: apiCategories };
    dispatch(setFood(data));
  } catch (error) {
    dispatch(errorFetchingFoods(error));
  }
};
