import { combineReducers } from 'redux';
import FilteredRecipes from './FilteredRecipes';
import Loading from './Loading';
import MainRecipes from './MainRecipes';

const rootReducers = combineReducers({ FilteredRecipes, Loading, MainRecipes });

export default rootReducers;
