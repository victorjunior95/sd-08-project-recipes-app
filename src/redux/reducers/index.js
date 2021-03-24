import { combineReducers } from 'redux';
import food from './food';
import drinks from './drinks';

const rootReducers = combineReducers({ foods: food, drinks });

export default rootReducers;
