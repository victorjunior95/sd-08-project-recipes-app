import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import example from './reducers/example.reducer';
import routes from './reducers/routes.reducer';
import user from './reducers/user.reducer';
import categories from './reducers/categories.reducer';
import meals from './reducers/meals.reducer';
import drinks from './reducers/drinks.reducer';

const rootReducer = combineReducers({
  example,
  routes,
  user,
  categories,
  meals,
  drinks,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
