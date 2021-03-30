import { DISLIKE_RECIPE } from './index';

const dislikeRecipeAction = (recipe) => ({
  type: DISLIKE_RECIPE,
  payload: recipe,
});

export default dislikeRecipeAction;
