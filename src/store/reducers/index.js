import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import searchReducer from './searchReducer';

const reducer = combineReducers({ loginReducer, searchReducer });

export default reducer;
