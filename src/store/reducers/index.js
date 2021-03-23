import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import headerReducer from './headerReducer';

const reducer = combineReducers({ loginReducer, headerReducer });

export default reducer;
