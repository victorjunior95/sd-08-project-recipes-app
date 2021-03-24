import { combineReducers } from 'redux';

import recipes from './cocktailRecipes';
import ingredients from './cocktailIngredients';
import categories from './cocktailCategories';
import areas from './cocktailAreas';

export default combineReducers({
  recipes,
  ingredients,
  categories,
  areas,
});
