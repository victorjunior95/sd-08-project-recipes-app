import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import foodsReducer from './foodsReducer';
import headerReducer from './headerReducer';
import drinksReducer from './drinksReducer';

const reducer = combineReducers({
  loginReducer,
  headerReducer,
  foodsReducer,
  drinksReducer,
});

export default reducer;
