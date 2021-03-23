import { IS_LOADING, FINISHED_LOADING } from '../actions';

const INITIAL_STATE = {
  isLoading: true,
};

const Login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_LOADING:
    return {
      isLoading: true,
    };
  case FINISHED_LOADING:
    return {
      isLoading: false,
    };
  default:
    return state;
  }
};

export default Login;
