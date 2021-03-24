import * as mealApi from '../../services/mealApi';

export const Types = {
  SET_FETCH_MEALS: 'SET_FETCH_MEALS',
  SET_FETCH_CATEGORIES: 'SET_FETCH_CATEGORIES',
  FETCH_MEALS_SUCCESS: 'FETCH_MEALS_SUCCESS',
  FETCH_MEALS_ERROR: 'FETCH_MEALS_ERROR',
  FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_ERROR: 'FETCH_CATEGORIES_ERROR',
  SET_FETCH_BY_CATEGORY: 'SET_FETCH_BY_CATEGORY',
  FETCH_BY_CATEGORY_SUCCESS: 'FETCH_BY_CATEGORY_SUCCESS',
  FETCH_BY_CATEGORY_ERROR: 'FETCH_BY_CATEGORY_ERROR',
};

const INITIAL_MEALS_STATE = {
  isFetchingMeals: false,
  isFetchingCategories: false,
  isFetchingByCategory: false,
  meals: [],
  categories: [],
  error: '',
  notFound: false,
};

const setFetchMeals = (state) => ({
  ...state, isFetchingMeals: true, notFound: false,
});

const fetchMealsSuccess = (state, action) => ({
  ...state,
  meals: action.payload,
  isFetchingMeals: false,
  error: '',
  notFound: action.payload.length === 0,
});

const fetchMealsError = (state, action) => ({
  ...state,
  error: action.payload,
  meals: [],
  isFetchingMeals: false,
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

const meals = (state = INITIAL_MEALS_STATE, action) => {
  switch (action.type) {
  case Types.SET_FETCH_MEALS: return setFetchMeals(state);
  case Types.FETCH_MEALS_SUCCESS: return fetchMealsSuccess(state, action);
  case Types.FETCH_MEALS_ERROR: return fetchMealsError(state, action);
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
  setFetchMeals: () => ({
    type: Types.SET_FETCH_MEALS,
  }),

  fetchMealsSuccess: (results) => ({
    type: Types.FETCH_MEALS_SUCCESS,
    payload: results,
  }),

  fetchMealsError: (error) => ({
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
      dispatch(Creators.fetchMealsSuccess(results.meals || []));
    } catch (error) {
      dispatch(Creators.fetchMealsError(error.message));
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

  // By Category

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
        results = (await mealApi.getByName()).meals || [];
      } else {
        results = (await mealApi.getByCategory(category)).meals || [];
      }
      dispatch(Creators.fetchMealsSuccess(results));
    } catch (error) {
      dispatch(Creators.fetchMealsError(error.message));
    }
  },
};

export default meals;
