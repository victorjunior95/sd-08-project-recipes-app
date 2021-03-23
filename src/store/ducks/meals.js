import * as mealApi from '../../services/mealApi';

export const Types = {
  SET_FETCH: 'SET_FETCH',
  FETCH_MEALS_SUCCESS: 'FETCH_MEALS_SUCCESS',
  FETCH_MEALS_ERROR: 'FETCH_MEALS_ERROR',
};

const INITIAL_MEALS_STATE = {
  isFetching: false,
  meals: [],
  error: '',
  notFound: false,
};

const meals = (state = INITIAL_MEALS_STATE, action) => {
  switch (action.type) {
  case Types.SET_FETCH:
    return { ...state, isFetching: true, notFound: false };

  case Types.FETCH_MEALS_SUCCESS:
    return {
      ...state,
      meals: action.payload,
      isFetching: false,
      error: '',
      notFound: action.payload.length === 0,
    };

  case Types.FETCH_MEALS_ERROR:
    return {
      ...state,
      error: action.payload,
      meals: [],
      isFetching: false,
      notFound: true,
    };

  default: return state;
  }
};

export const Creators = {
  setFetch: () => ({
    type: Types.SET_FETCH,
  }),

  fetchMeals: (searchType, searchValue) => async (dispatch) => {
    dispatch(Creators.setFetch());
    try {
      let results = null;
      if (searchType === 'ingredient') {
        results = await mealApi.getByIngredient(searchValue);
      } else if (searchType === 'name') {
        results = await mealApi.getByName(searchValue);
      } else {
        results = await mealApi.getByFirstLetter(searchValue);
      }
      dispatch(Creators.fetchRecipeSuccess(results.meals || []));
    } catch (error) {
      dispatch(Creators.fetchRecipeError(error.message));
    }
  },

  fetchRecipeSuccess: (results) => ({
    type: Types.FETCH_MEALS_SUCCESS,
    payload: results,
  }),

  fetchRecipeError: (error) => ({
    type: Types.FETCH_MEALS_ERROR,
    payload: error,
  }),
};

export default meals;
