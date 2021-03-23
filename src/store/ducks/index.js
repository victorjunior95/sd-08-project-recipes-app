import { combineReducers } from 'redux';

import user from './user';
import meals from './meals';
import cocktails from './cocktails';

export default combineReducers({
  user,
  meals,
  cocktails,
});
