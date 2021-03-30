import { DISLIKE_RECIPE, FAVORITE_RECIPE } from '../actions/index';

// import { mockedTestDataLikedMeal, mockedTestDataLikedDrink } from './mockData';

// salvar receitas com o seguinte formato:
// [{ id, type, area, category, alcoholicOrNot, name, image }]
// acrescentar uma chave liked na receita com valor true se favorita e false para desfavorirar

const INITIAL_STATE = {
  favoriteRecipes: [],
};

export default function FavoriteRecipesReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case FAVORITE_RECIPE:
    // adaptar quando criar a action
    return {
      ...state,
      favoriteRecipes: payload,
    };
  case DISLIKE_RECIPE:
    return {
      favoriteRecipes: state.favoriteRecipes.filter((e) => e.id !== payload.id),
    };
  default:
    return state;
  }
}
