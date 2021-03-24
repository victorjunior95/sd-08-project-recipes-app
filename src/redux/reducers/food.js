import { GET_API_FOOD, FETCH_API_FOODS } from '../actions/types';

const INITIALSTATE = {
  meals: [],
  isFetching: false,
};

const food = (state = INITIALSTATE, action) => {
  switch (action.type) {
  case FETCH_API_FOODS:
    return {
      ...state,
      isFetching: true,
    };
  case GET_API_FOOD:
    return { ...state,
      meals: action.payload.meals,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default food;
