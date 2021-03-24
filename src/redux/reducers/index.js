import { combineReducers } from 'redux';
import food from './food';

const rootReducers = combineReducers({ foods: food });

export default rootReducers;
