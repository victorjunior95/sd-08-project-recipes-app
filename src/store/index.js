import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './ducks';
import * as storage from '../services/storage';

const INITIAL_USER_STATE = {
  email: '',
  isAuthenticated: false,
};

const INITIAL_STATE = {
  user: {
    ...INITIAL_USER_STATE,
    ...JSON.parse(storage.getUser()),
  },
};

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
