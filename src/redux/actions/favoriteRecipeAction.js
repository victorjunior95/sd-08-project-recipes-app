import { FAVORITE_RECIPE } from './index';

const favoriteRecipesAction = (recipe) => ({
  type: FAVORITE_RECIPE,
  payload: recipe,
});

export default favoriteRecipesAction;
