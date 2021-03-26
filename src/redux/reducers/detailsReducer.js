import {
  SAVE_ACTUAL_RECIPE, SAVE_RECOMMENDATIONS, SAVE_FAVORITES, SAVE_IN_PROGRESS,
}
  from '../actions/details';

const INITIAL_STATE = {
  actualRecipe: {},
  favorites: [],
  recommendations: [],
  progress: {
    cocktails: [],
    meals: [],
  },
};

export default function detailsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SAVE_ACTUAL_RECIPE:
    return { ...state, actualRecipe: payload.actualRecipe };
  case SAVE_RECOMMENDATIONS:
    return { ...state, recommendations: payload.recommendations };
  case SAVE_FAVORITES:
    return { ...state, favorites: payload.favorites };
  case SAVE_IN_PROGRESS:
    return { ...state, progress: payload.progress };
  default:
    return state;
  }
}
