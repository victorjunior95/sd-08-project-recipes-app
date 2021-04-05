const INITIAL_STATE = {
  recipesInProgress: {
    meals: [],
    drinks: [],
  },
  recipesDone: {
    meals: [],
    drinks: [],
  },
};

export const recipesInProgress = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RECIPE_IN_PROGRESS_MEALS':
    return { ...state,
      recipesInProgress: {
        ...recipesInProgress, meals: action.payload.mealInProgress,
      } };
  case 'RECIPE_IN_PROGRESS_DRINKS':
    return { ...state,
      recipesInProgress: {
        ...recipesInProgress, drinks: action.payload.drinkInProgress,
      } };
  default:
    return state;
  }
};

export const recipesDone = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RECIPES_DONE_MEALS':
    return { ...state,
      recipesDone: {
        ...recipesDone,
        meals: action.payload.recipesDone,
      } };
  case 'RECIPES_DONE_DRINKS':
    return { ...state,
      recipesDone: {
        ...recipesDone,
        drinks: action.payload.recipesDone,
      } };
  default:
    return state;
  }
};
