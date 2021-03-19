import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import example from './reducers/example.reducer';
import routes from './reducers/routes.reducer';

const rootReducer = combineReducers({
  example,
  routes,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
