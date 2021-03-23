import { combineReducers } from 'redux';
import FilteredFoodsRecipes from './FilteredFoodsRecipes';
import Login from './Login';

const rootReducers = combineReducers({ FilteredFoodsRecipes, Login });

export default rootReducers;
