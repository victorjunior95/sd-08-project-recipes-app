export const Types = {
  SAVE_RECIPE: 'SAVE_RECIPE',
};

export const Creators = {
  saveRecipe: (recipe) => ({
    type: Types.SAVE_NAME,
    payload: recipe,
  }),
};

const recipe = (state = {}, action) => {
  switch (action.type) {
  case Types.SAVE_RECIPE: return state;
  default: return state;
  }
};

export default recipe;
