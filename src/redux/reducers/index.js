import { combineReducers } from 'redux';
import user from './loginReducer';
import search from './searchReducer';
import recipes from './recipesReducer';
import doneRecipes from './DoneRecipes';

const appReducer = combineReducers({
  user,
  search,
  recipes,
  doneRecipes,
});

export default appReducer;
