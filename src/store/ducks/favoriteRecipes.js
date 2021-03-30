export const Types = {
  ADD_RECIPE: 'favoriteRecipes/ADD_RECIPE',
  REMOVE_RECIPE: 'favoriteRecipes/REMOVE_RECIPE',
};

const INITIAL_STATE = {
  favoriteRecipes: [],
};

const mapFavorite = (favorite) => ({
  id: favorite.idMeal || favorite.idDrink,
  type: favorite.idMeal ? 'comida' : 'bebida',
  area: favorite.strArea || '',
  category: favorite.strCategory || '',
  alcoholicOrNot: favorite.strAlcoholic || '',
  name: favorite.strMeal || favorite.strDrink,
  image: favorite.strMealThumb || favorite.strDrinkThumb || '',
});

const addRecipe = (state, action) => ({
  ...state,
  favoriteRecipes: [...state.favoriteRecipes, mapFavorite(action.payload)],
});

const removeRecipe = (state, action) => ({
  ...state,
  favoriteRecipes: state.favoriteRecipes.filter((recipe) => (
    recipe.id !== action.payload)),
});

const favoriteRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.ADD_RECIPE: return addRecipe(state, action);
  case Types.REMOVE_RECIPE: return removeRecipe(state, action);
  default: return state;
  }
};

export const Creators = {
  addRecipe: (recipe) => ({
    type: Types.ADD_RECIPE,
    payload: recipe,
  }),

  removeRecipe: (id) => ({
    type: Types.REMOVE_RECIPE,
    payload: id,
  }),
};

export default favoriteRecipes;
