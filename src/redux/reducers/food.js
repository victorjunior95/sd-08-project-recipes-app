import {
  GET_API_FOOD,
  FETCH_API_FOODS,
  ERROR_REQUEST_API_FOODS,
  FETCH_API_CATEGORIES,
  GET_FILTER_BTN_FOOD,
} from '../actions/types';

const INITIALSTATE = {
  meals: [],
  categories: [],
  isFetching: false,
  onClickFilter: false,
};

const food = (state = INITIALSTATE, action) => {
  switch (action.type) {
  case FETCH_API_FOODS:
    return {
      ...state,
      isFetching: true,
    };
  case FETCH_API_CATEGORIES:
    return {
      ...state,
      isFetchingCategories: true,
    };
  case GET_API_FOOD:
    return { ...state,
      meals: action.payload.meals,
      categories: action.payload.categories,
      isFetching: false,
      onClickFilter: false,
    };
  case GET_FILTER_BTN_FOOD:
    return { ...state,
      meals: action.payload,
      isFetching: false,
      onClickFilter: true,
    };
  case ERROR_REQUEST_API_FOODS:
    return { ...state,
      meals: false,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default food;
