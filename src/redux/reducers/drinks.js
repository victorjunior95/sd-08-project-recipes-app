import { GET_API_DRINKS, FETCH_API_DRINKS } from '../actions/types';

const INITIALSTATE = {
  drinks: [],
  isFetching: false,
};

const drinks = (state = INITIALSTATE, action) => {
  switch (action.type) {
  case FETCH_API_DRINKS:
    return {
      ...state,
      isFetching: true,
    };
  case GET_API_DRINKS:
    return { ...state,
      drinks: action.payload.drinks,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default drinks;
