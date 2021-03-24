import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import headerReducer from './headerReducer';

const reducer = combineReducers({
  loginReducer,
  headerReducer,
  searchReducer,
});

export default reducer;
