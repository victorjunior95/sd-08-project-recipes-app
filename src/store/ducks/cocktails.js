import * as cocktailApi from '../../services/cocktailApi';

export const Types = {
  SET_FETCH: 'SET_FETCH',
  FETCH_COCKTAILS_SUCCESS: 'FETCH_COCKTAILS_SUCCESS',
  FETCH_COCKTAILS_ERROR: 'FETCH_COCKTAILS_ERROR',
};

const INITIAL_STATE = {
  isFetching: false,
  drinks: [],
  error: '',
  notFound: false,
};

const cocktails = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.SET_FETCH:
    return { ...state, isFetching: true, notFound: false };

  case Types.FETCH_COCKTAILS_SUCCESS:
    return {
      ...state,
      drinks: action.payload,
      isFetching: false,
      error: '',
      notFound: action.payload.length === 0,
    };

  case Types.FETCH_COCKTAILS_ERROR:
    return {
      ...state,
      error: action.payload,
      drinks: [],
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

  fetchCocktails: (searchType, searchValue) => async (dispatch) => {
    dispatch(Creators.setFetch());
    try {
      let results = null;
      if (searchType === 'ingredient') {
        results = await cocktailApi.getByIngredient(searchValue);
      } else if (searchType === 'name') {
        results = await cocktailApi.getByName(searchValue);
      } else {
        results = await cocktailApi.getByFirstLetter(searchValue);
      }
      dispatch(Creators.fetchRecipeSuccess(results.drinks || []));
    } catch (error) {
      dispatch(Creators.fetchRecipeError(error.message));
    }
  },

  fetchRecipeSuccess: (results) => ({
    type: Types.FETCH_COCKTAILS_SUCCESS,
    payload: results,
  }),

  fetchRecipeError: (error) => ({
    type: Types.FETCH_COCKTAILS_ERROR,
    payload: error,
  }),
};

export default cocktails;
