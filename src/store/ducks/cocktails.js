import * as cocktailApi from '../../services/cocktailApi';

export const Types = {
  SET_FETCH_COCKTAILS: 'SET_FETCH_COCKTAILS',
  SET_FETCH_CATEGORIES: 'SET_FETCH_CATEGORIES',
  FETCH_COCKTAILS_SUCCESS: 'FETCH_COCKTAILS_SUCCESS',
  FETCH_COCKTAILS_ERROR: 'FETCH_COCKTAILS_ERROR',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_COCKTAILS_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_ERROR: 'FETCH_COCKTAILS_CATEGORIES_ERROR',
  SET_FETCH_BY_CATEGORY: 'SET_FETCH_BY_CATEGORY',
  FETCH_BY_CATEGORY_SUCCESS: 'FETCH_BY_CATEGORY_SUCCESS',
  FETCH_BY_CATEGORY_ERROR: 'FETCH_BY_CATEGORY_ERROR',
};

const INITIAL_STATE = {
  isFetchingCocktails: false,
  isFetchingCategories: false,
  drinks: [],
  categories: [],
  error: '',
  notFound: false,
};

const setFetchCocktails = (state) => ({
  ...state,
  isFetchingCocktails: true,
  notFound: false,
});

const fetchCocktailsSuccess = (state, action) => ({
  ...state,
  drinks: action.payload,
  isFetchingCocktails: false,
  error: '',
  notFound: action.payload.length === 0,
});

const fetchCocktailsError = (state, action) => ({
  ...state,
  error: action.payload,
  drinks: [],
  isFetchingCocktails: false,
  notFound: true,
});

const setFetchCategories = (state) => ({
  ...state, isFetchingCategories: true,
});

const fetchCategoriesSuccess = (state, action) => ({
  ...state,
  isFetchingCategories: false,
  error: '',
  categories: action.payload,
});

const fetchCategoriesError = (state, action) => ({
  ...state,
  error: action.payload,
  categories: [],
  isFetchingCategories: false,
});

const setFetchByCategory = (state) => ({
  ...state, isFetchingByCategory: true,
});

const fetchByCategorySuccess = (state, action) => ({
  ...state,
  meals: action.payload,
  isFetchingByCategory: false,
  error: '',
  notFound: action.payload.length === 0,

});

const fetchByCategoryError = (state, action) => ({
  ...state,
  error: action.payload,
  meals: [],
  isFetchingByCategory: false,
  notFound: true,
});

const cocktails = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.SET_FETCH_COCKTAILS: return setFetchCocktails(state);
  case Types.FETCH_COCKTAILS_SUCCESS: return fetchCocktailsSuccess(state, action);
  case Types.FETCH_COCKTAILS_ERROR: return fetchCocktailsError(state, action);
  case Types.SET_FETCH_CATEGORIES: return setFetchCategories(state);
  case Types.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
  case Types.FETCH_CATEGORIES_ERROR: return fetchCategoriesError(state, action);
  case Types.SET_FETCH_BY_CATEGORY: return setFetchByCategory(state);
  case Types.FETCH_BY_CATEGORY_SUCCESS: return fetchByCategorySuccess(state, action);
  case Types.FETCH_BY_CATEGORY_ERROR: return fetchByCategoryError(state, action);
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

  // By Categories

  setFetchByCategory: () => ({
    type: Types.SET_FETCH_BY_CATEGORY,
  }),

  fetchByCategorySuccess: (results) => ({
    type: Types.FETCH_BY_CATEGORY_SUCCESS,
    payload: results,
  }),

  fetchByCategoryError: (error) => ({
    type: Types.FETCH_BY_CATEGORY_ERROR,
    payload: error,
  }),

  fetchByCategory: (category) => async (dispatch) => {
    dispatch(Creators.setFetchByCategory());
    try {
      let results = null;
      if (category === 'All') {
        results = (await cocktailApi.getByName()).drinks || [];
      } else {
        results = (await cocktailApi.getByCategory(category)).drinks || [];
      }
      dispatch(Creators.fetchByCategorySuccess(results));
    } catch (error) {
      dispatch(Creators.fetchByCategoryError(error.message));
    }
  },
};

export default cocktails;
