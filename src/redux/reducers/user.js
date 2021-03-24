import { SAVE_EMAIL } from '../actions/types';

const INITIALSTATE = {
  email: '',
};

const user = (state = INITIALSTATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
