import { combineReducers } from 'redux';
import user from './loginReducer';
import search from './searchReducer';
import recipes from './recipesReducer';

const appReducer = combineReducers({
  user,
  search,
  recipes,
});

export default appReducer;
