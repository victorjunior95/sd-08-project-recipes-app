import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import headerReducer from './headerReducer';
import drinksReducer from './drinksReducer';
import foodsReducer from './foodsReducer';

const reducer = combineReducers({
  loginReducer,
  headerReducer,
  drinksReducer,
  foodsReducer,
});

export default reducer;
