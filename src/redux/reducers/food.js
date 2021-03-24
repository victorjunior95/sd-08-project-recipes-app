import { API_FOOD } from '../actions/types';

const INITIALSTATE = {
  data: [],
};

const food = (state = INITIALSTATE, Action) => {
  switch (Action.type) {
  case API_FOOD:
    return { ...state, data: action.payload };
  default:
    return state;
  }
};

export default food;
