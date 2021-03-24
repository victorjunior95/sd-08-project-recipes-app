import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import cloneFoodsReducer from './cloneFoodsReducer';
import headerReducer from './headerReducer';
import drinksReducer from './drinksReducer';

const reducer = combineReducers({
  loginReducer,
  headerReducer,
  cloneFoodsReducer,
  drinksReducer,
});

export default reducer;
