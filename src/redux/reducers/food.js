import { API_FOOD, FETCH_API } from '../actions/types';

const INITIALSTATE = {
  data: [],
  isFetching: false,
};

const food = (state = INITIALSTATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      isFetching: true,
    };
  case API_FOOD:
    return { ...state,
      data: action.payload,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default food;
