export const Types = {
  ADD_MEAL: 'inProgressRecipes/ADD_MEAL',
  REMOVE_MEAL: 'inProgressRecipes/REMOVE_MEAL',
  ADD_COCKTAIL: 'inProgressRecipes/ADD_COCKTAIL',
  REMOVE_COCKTAIL: 'inProgressRecipes/REMOVE_COCKTAIL',
};

const INITIAL_STATE = {
  meals: [],
  cocktails: [],
};

const addMeal = (state, action) => ({
  ...state,
  meals: [...state.meals, action.payload],
});

const removeMeal = (state, action) => ({
  ...state,
  meals: state.meals.filter((meal) => (
    meal.id !== action.payload)),
});

const addCocktail = (state, action) => ({
  ...state,
  cocktails: [...state.cocktails, action.payload],
});

const removeCocktail = (state, action) => ({
  ...state,
  cocktails: state.meals.filter((cocktail) => (
    cocktail.id !== action.payload)),
});

const inProgressRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.ADD_MEAL: return addMeal(state, action);
  case Types.REMOVE_MEAL: return removeMeal(state, action);
  case Types.ADD_COCKTAIL: return addCocktail(state, action);
  case Types.REMOVE_COCKTAIL: return removeCocktail(state, action);
  default: return state;
  }
};

export const Creators = {
  addMeal: (recipe) => ({
    type: Types.ADD_MEAL,
    payload: recipe,
  }),

  removeMeal: (id) => ({
    type: Types.REMOVE_MEAL,
    payload: id,
  }),

  addCocktail: (recipe) => ({
    type: Types.ADD_COCKTAIL,
    payload: recipe,
  }),

  removeCocktail: (id) => ({
    type: Types.REMOVE_COCKTAIL,
    payload: id,
  }),
};

export default inProgressRecipes;
