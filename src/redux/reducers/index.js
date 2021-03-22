import { combineReducers } from 'redux';
import user from '../actions/user';
import search from '../actions/search';

const appReducer = combineReducers({
  user,
  search,
});

export default appReducer;
