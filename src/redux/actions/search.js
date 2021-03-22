import { SEARCH_INPUT } from './index';

const INITIAL_STATE = {
  inputValue: '',
  inputType: '',
};

export default function LoginReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
  case SEARCH_INPUT:
    return {
      ...state,
      inputValue: payload.inputValue,
      inputType: payload.inputType,
    };
  default:
    return state;
  }
}
