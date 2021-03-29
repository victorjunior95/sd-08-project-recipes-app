import { combineReducers } from 'redux';
import user from './loginReducer';
import search from './searchReducer';
import recipes from './recipesReducer';
import doneRecipes from './DoneRecipes';
import recomendation from './recomendationReducers';

const appReducer = combineReducers({
  user,
  search,
  recipes,
  doneRecipes,
  recomendation,
});

export default appReducer;
