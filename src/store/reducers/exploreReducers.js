import {
  RECIPE_FETCH,
  RECIPE_FETCH_SUCCESS,
  RECIPE_FETCH_ERROR,
} from '../actions/constants';

const randomInitialState = {
  isFetching: false,
  recipe: [],
  error: {
    status: false,
    msg: '',
  },
};

const byRegionInitialState = {
  isFetching: false,
  regions: [],
  recipes: [],
  error: {
    status: false,
    msg: '',
  },
};

const ingredientsInitialState = {
  isFetching: false,
  ingredients: [],
  recipes: [],
  error: {
    status: false,
    msg: '',
  },
};

export function randomRecipeReducer(
  state = randomInitialState, action,
) {
  switch (action.type) {
  case RECIPE_FETCH:
    return {
      ...state,
      error: {
        status: false,
        msg: '',
      },
      isFetching: true,
    };

  case RECIPE_FETCH_SUCCESS:
    return {
      ...state,
      recipe: [...action.payload],
      isFetching: false,
    };

  case RECIPE_FETCH_ERROR:
    return {
      ...state,
      error: {
        ...state.error,
        status: true,
        msg: action.error,
      },
      isFetching: false,
    };

  default:
    return state;
  }
}

export function exploreIngredientsReducer(
  state = ingredientsInitialState, action,
) {
  switch (action.type) {
  case RECIPE_FETCH:
    return {
      ...state,
      error: {
        status: false,
        msg: '',
      },
      isFetching: true,
    };

  case RECIPE_FETCH_SUCCESS:
    return {
      ...state,
      ingredients: [...action.payload],
      isFetching: false,
    };

  case RECIPE_FETCH_ERROR:
    return {
      ...state,
      ingredients: [],
      error: {
        ...state.error,
        status: true,
        msg: action.error,
      },
      isFetching: false,
    };

  default:
    return state;
  }
}

export function exploreRecipesByRegion(
  state = byRegionInitialState, action,
) {
  switch (action.type) {
  case RECIPE_FETCH:
    return {
      ...state,
      error: {
        status: false,
        msg: '',
      },
      isFetching: true,
    };

  case RECIPE_FETCH_SUCCESS:
    return {
      ...state,
      regions: [...action.payload],
      isFetching: false,
    };

  case RECIPE_FETCH_ERROR:
    return {
      ...state,
      regions: [],
      error: {
        ...state.error,
        status: true,
        msg: action.error,
      },
      isFetching: false,
    };

  default:
    return state;
  }
}
