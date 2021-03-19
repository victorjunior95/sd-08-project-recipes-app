import {
  LOGIN_USER,
  LOGOUT_USER,
} from '../actions/loginActions';

const INITIAL_STATE_USER = {
  email: '',
};
export default function loginReducer(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state, email: action.payload }; // não está feito
  case LOGOUT_USER:
    return {
      ...state }; // não está feito
  default:
    return state;
  }
}
