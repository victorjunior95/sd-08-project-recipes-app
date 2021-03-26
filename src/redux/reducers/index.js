import { combineReducers } from 'redux';
import user from './loginReducer';
import search from './searchReducer';
import recipes from './recipesReducer';
import doneRecipes from './DoneRecipesReducer';
import favoriteRecipes from './FavoriteRecipesReducer';

const appReducer = combineReducers({
  user,
  search,
  recipes,
  doneRecipes,
  favoriteRecipes,
});

export default appReducer;
