import {
  // requestDrinkByName,
  // requestDrinkByIngredient,
  // requestDrinkByFirstLetter,
  requestMainDrinks,
} from '../../services/requestDrinksAPI';
import {
  // requestByName,
  // requestByIngredient,
  // requestByFirstLetter,
  requestMainFoods,
} from '../../services/requestFoodsAPI';

// ACTION DE LOGIN
export const IS_LOADING = 'IS_LOADING';

export const FINISHED_LOADING = 'FINISHED_LOADING';

export const actionIsLoading = (isLoading) => ({
  type: IS_LOADING,
  payload: {
    isLoading,
  },
});

export const actionFinishedLogin = () => ({
  type: FINISHED_LOADING,
});

// ACTIONS FILTERED_FOODS

export const FILTERED_FOODS = 'FILTERED_FOODS';

export const actionFilteredFoods = (foods) => ({
  type: FILTERED_FOODS,
  payload: {
    foods,
  },
});

export const FILTERED_DRINKS = 'FILTERED_DRINKS';

export const actionFilteredDrinks = (drinks) => ({
  type: FILTERED_DRINKS,
  payload: {
    drinks,
  },
});

// ACTIONS MAIN_FOODS

export const MAIN_FOODS = 'MAIN_FOODS';

export const actionMainFoods = (foods) => ({
  type: MAIN_FOODS,
  payload: {
    foods,
  },
});

// ACTIONS MAIN_DRINKS

export const MAIN_DRINKS = 'MAIN_DRINKS';

export const actionMainDrinks = (drinks) => ({
  type: MAIN_DRINKS,
  payload: {
    drinks,
  },
});

// THUNK ACTIONS

export const actionThunkMainFoods = () => async (dispatch) => {
  dispatch(actionIsLoading(true));
  const mainFoods = await requestMainFoods();
  dispatch(actionMainFoods(mainFoods));
  dispatch(actionIsLoading(false));
};

export const actionThunkMainDrinks = () => async (dispatch) => {
  dispatch(actionIsLoading(true));
  const mainDrinks = await requestMainDrinks();
  dispatch(actionMainDrinks(mainDrinks));
  dispatch(actionIsLoading(false));
};
