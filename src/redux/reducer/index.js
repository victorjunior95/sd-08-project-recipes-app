import { combineReducers } from 'redux';
import FilteredFoodsRecipes from './FilteredRecipes';
import Login from './Login';

const rootReducers = combineReducers({ FilteredFoodsRecipes, Login });

export default rootReducers;
