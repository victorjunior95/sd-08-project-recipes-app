import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './ducks';
import * as storage from '../services/storage';

const INITIAL_USER_STATE = {
  email: '',
  isAuthenticated: false,
};

const INITIAL_IN_PROGRESS_STATE = {
  meals: {},
  cocktails: {},
};

const doneRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

const INITIAL_STATE = {
  user: {
    ...INITIAL_USER_STATE,
    ...JSON.parse(storage.getUser()),
  },
  inProgressRecipes: {
    ...INITIAL_IN_PROGRESS_STATE,
    ...JSON.parse(storage.getInProgress()),
  },
  favoriteRecipes: {
    favoriteRecipes: JSON.parse(storage.getFavoriteRecipes()) || [],
  },

  doneRecipes: {
    // doneRecipes: JSON.parse(storage.getDoneRecipes()) || [],
    doneRecipes,
  },
};

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  const { favoriteRecipes } = store.getState().favoriteRecipes;
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
});

export default store;
