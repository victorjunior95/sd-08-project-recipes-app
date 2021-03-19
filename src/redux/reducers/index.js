import { combineReducers } from 'redux';
import user from '../actions/user';

const appReducer = combineReducers({
  user,
});

export default appReducer;
