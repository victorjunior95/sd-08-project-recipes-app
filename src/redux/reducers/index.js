import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  mealsReducer,
  loginReducer,
});

export default rootReducer;
