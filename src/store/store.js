import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import example from './reducers/example.reducer';
import user from './reducers/user.reducer';
<<<<<<< HEAD
import categories from './reducers/categories.reducer';
import meals from './reducers/meals.reducer';
import drinks from './reducers/drinks.reducer';
=======
import favoriteRecipes from './reducers/favoriteRecipes.reducer';
>>>>>>> f4dc305e5a68a50735f7878fed8a38b69c13b1ad

const rootReducer = combineReducers({
  example,
  user,
<<<<<<< HEAD
  categories,
  meals,
  drinks,
=======
  favoriteRecipes,
>>>>>>> f4dc305e5a68a50735f7878fed8a38b69c13b1ad
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
