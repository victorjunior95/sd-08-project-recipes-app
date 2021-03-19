import { LOGIN_USER } from './index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
}
