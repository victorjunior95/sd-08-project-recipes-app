import * as mealApi from '../../services/mealApi';

export const Types = {
  SET_FETCH_MEALS: 'SET_FETCH_MEALS',
  SET_FETCH_CATEGORIES: 'SET_FETCH_CATEGORIES',
  FETCH_MEALS_SUCCESS: 'FETCH_MEALS_SUCCESS',
  FETCH_MEALS_ERROR: 'FETCH_MEALS_ERROR',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_ERROR: 'FETCH_CATEGORIES_ERROR',
  SET_FETCH_CATEGORY: 'FETCH_CATEGORY',
  FETCH_CATEGORY_SUCCESS: 'FETCH_CATEGORY',
  FETCH_CATEGORY_ERROR: 'FETCH_CATEGORY',
  ADD_FILTER: 'ADD_FILTER',
};

const INITIAL_MEALS_STATE = {
  isFetchingMeals: false,
  isFetchingCategories: false,
  isFetchingByCategory: false,
  meals: [],
  categories: [],
  error: '',
  notFound: false,
  filter: 'All',
};

const meals = (state = INITIAL_MEALS_STATE, action) => {
  switch (action.type) {
  case Types.ADD_FILTER:
    return {
      ...state,
      filter: action.filter,
    };

  case Types.SET_FETCH_MEALS:
    return { ...state, isFetchingMeals: true, notFound: false };

  case Types.FETCH_MEALS_SUCCESS:
    return {
      ...state,
      meals: action.payload,
      isFetchingMeals: false,
      error: '',
      notFound: action.payload.length === 0,
    };

  case Types.FETCH_MEALS_ERROR:
    return {
      ...state,
      error: action.payload,
      meals: [],
      isFetchingMeals: false,
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
  
  case Types.SET_FETCH_CATEGORY:
    return { ...state, isFetchingByCategory: true };

  case Types.FETCH_CATEGORIES_ERROR

  default: return state;
  }
};

export const Creators = {
  addFilter: (filter) => ({
    type: Types.ADD_FILTER,
    filter,
  }),

  setFetchMeals: () => ({
    type: Types.SET_FETCH_MEALS,
  }),

  fetchRecipeSuccess: (results) => ({
    type: Types.FETCH_MEALS_SUCCESS,
    payload: results,
  }),

  fetchRecipeError: (error) => ({
    type: Types.FETCH_MEALS_ERROR,
    payload: error,
  }),

  fetchMeals: (searchType = '', searchValue = '') => async (dispatch) => {
    dispatch(Creators.setFetchMeals());
    try {
      let results = null;
      if (searchType === 'ingredient') {
        results = await mealApi.getByIngredient(searchValue);
      } else if (searchType === 'firstLetter') {
        results = await mealApi.getByFirstLetter(searchValue);
      } else {
        results = await mealApi.getByName(searchValue);
      }
      dispatch(Creators.fetchRecipeSuccess(results.meals || []));
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
      const { meals: results = [] } = await mealApi.getCategories();
      const categories = results.map(({ strCategory }) => strCategory);

      dispatch(Creators.fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(Creators.fetchCategoriesError(error.message));
    }
  },
};

export default meals;
