import { ADD_TOKEN_DRINK, ADD_TOKEN_MEAL, ADD_USER } from '../actions';

const INITIAL_STATE = {
  mealsToken: '',
  cocktailsToken: '',
  email: '',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TOKEN_MEAL:
    return { ...state, mealsToken: action.payload };
  case ADD_TOKEN_DRINK:
    return { ...state, cocktailsToken: action.payload };
  case ADD_USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default login;
