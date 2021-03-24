import * as cocktailApi from '../../services/cocktailApi';

export const Types = {
  SET_FETCH_COCKTAILS: 'SET_FETCH_COCKTAILS',
  SET_FETCH_CATEGORIES: 'SET_FETCH',
  FETCH_COCKTAILS_SUCCESS: 'FETCH_COCKTAILS_SUCCESS',
  FETCH_COCKTAILS_ERROR: 'FETCH_COCKTAILS_ERROR',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_COCKTAILS_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_ERROR: 'FETCH_COCKTAILS_CATEGORIES_ERROR',
};

const INITIAL_STATE = {
  isFetchingCocktails: false,
  isFetchingCategories: false,
  drinks: [],
  categories: [],
  error: '',
  notFound: false,
};

const cocktails = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.SET_FETCH_COCKTAILS:
    return { ...state, isFetchingCocktails: true, notFound: false };

  case Types.FETCH_COCKTAILS_SUCCESS:
    return {
      ...state,
      drinks: action.payload,
      isFetchingCocktails: false,
      error: '',
      notFound: action.payload.length === 0,
    };

  case Types.FETCH_COCKTAILS_ERROR:
    return {
      ...state,
      error: action.payload,
      drinks: [],
      isFetchingCocktails: false,
      notFound: true,
    };

  case Types.SET_FETCH_CATEGORIES:
    return { ...state, isFetchingCategories: true };

  case Types.FETCH_CATEGORIES_SUCCESS:
    return {
      ...state,
      isFetchingCategories: false,
      error: '',
      categories: action.payload,
    };

  case Types.FETCH_CATEGORIES_ERROR:
    return {
      ...state,
      error: action.payload,
      categories: [],
      isFetchingCategories: false,
    };

  default: return state;
  }
};

export const Creators = {
  setFetch: () => ({
    type: Types.SET_FETCH_COCKTAILS,
  }),

  fetchRecipeSuccess: (results) => ({
    type: Types.FETCH_COCKTAILS_SUCCESS,
    payload: results,
  }),

  fetchRecipeError: (error) => ({
    type: Types.FETCH_COCKTAILS_ERROR,
    payload: error,
  }),

  fetchCocktails: (searchType = '', searchValue = '') => async (dispatch) => {
    dispatch(Creators.setFetch());
    try {
      let results = null;
      if (searchType === 'ingredient') {
        results = await cocktailApi.getByIngredient(searchValue);
      } else if (searchType === 'firstLetter') {
        results = await cocktailApi.getByFirstLetter(searchValue);
      } else {
        results = await cocktailApi.getByName(searchValue);
      }
      dispatch(Creators.fetchRecipeSuccess(results.drinks || []));
    } catch (error) {
      dispatch(Creators.fetchRecipeError(error.message));
    }
  },

  // CATEGORIES

  setFetchCategories: () => ({
    type: Types.SET_FETCH_CATEGORIES,
  }),

  fetchCategoriesSuccess: (results) => ({
    type: Types.FETCH_CATEGORIES_SUCCESS,
    payload: results,
  }),

  fetchCategoriesError: (error) => ({
    type: Types.FETCH_CATEGORIES_ERROR,
    payload: error,
  }),

  fetchCategories: () => async (dispatch) => {
    dispatch(Creators.setFetchCategories());
    try {
      const { drinks: results = [] } = await cocktailApi.getCategories();
      const categories = results.map(({ strCategory }) => strCategory);

      dispatch(Creators.fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(Creators.fetchCategoriesError(error.message));
    }
  },
};

export default cocktails;
