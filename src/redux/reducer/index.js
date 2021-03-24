import { combineReducers } from 'redux';
import FilteredRecipes from './FilteredRecipes';
import Loading from './Loading';
import MainRecipes from './MainRecipes';
import CategoriesRecipes from './CategoriesRecipes';

const rootReducers = combineReducers({
  FilteredRecipes,
  Loading,
  MainRecipes,
  CategoriesRecipes,
});

export default rootReducers;
