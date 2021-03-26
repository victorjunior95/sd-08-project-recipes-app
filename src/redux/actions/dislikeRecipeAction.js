import { DISLIKE_RECIPE } from './index';

const dislikeRecipeAction = (index) => ({
  type: DISLIKE_RECIPE,
  payload: index,
});

export default dislikeRecipeAction;
