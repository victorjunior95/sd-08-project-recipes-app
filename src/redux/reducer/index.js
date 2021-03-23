import { combineReducers } from 'redux';
import FilteredRecipes from './FilteredRecipes';
import Login from './Login';

const rootReducers = combineReducers({ FilteredRecipes, Login });

export default rootReducers;
