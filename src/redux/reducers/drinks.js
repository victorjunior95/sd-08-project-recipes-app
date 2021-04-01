import
{
  GET_API_DRINKS,
  FETCH_API_DRINKS,
  ERROR_REQUEST_API_DRINKS,

} from '../actions/types';

const INITIALSTATE = {
  drinks: [],
  categories: [],
  isFetching: false,
};
// setDrinks
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
      categories: action.payload.categories,
      isFetching: false,
    };
  case ERROR_REQUEST_API_DRINKS:
    return { ...state,
      drinks: false,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default drinks;
