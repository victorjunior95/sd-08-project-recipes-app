import { combineReducers } from 'redux';
import user from './loginReducer';
import search from './searchReducer';
import recipes from './recipesReducer';
import recomendation from './recomendationReducers';
import favoriteRecipes from './FavoriteRecipesReducer';

const appReducer = combineReducers({
  user,
  search,
  recipes,
  recomendation,
  favoriteRecipes,
});

export default appReducer;
