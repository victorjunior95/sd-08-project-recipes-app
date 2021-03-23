import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import loginReducer from './loginReducer';
import drinkReducer from './drinksReducer';
import mealsCategoriesReducer from './mealsCategoriesReducer';
import drinkCategoriesReducer from './drinkCategoriesReducer';

const rootReducer = combineReducers({
  mealsReducer,
  loginReducer,
  drinkReducer,
  mealsCategoriesReducer,
  drinkCategoriesReducer,
});

export default rootReducer;
