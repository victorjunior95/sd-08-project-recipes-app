import { DONE_RECIPE } from '../actions/index';

import { mockedTestDataMeal, mockedTestDataDrink } from './mockData';
// salvar receitas com o seguinte formato:
// [{ id, type, area, category, alcoholicOrNot, name, image, doneDate, tags }]

const INITIAL_STATE = {
  recipes: [
    mockedTestDataMeal,
    mockedTestDataDrink,
  ],
};

export default function DoneRecipesReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case DONE_RECIPE:
    // adaptar quando criar a action
    return {
      ...state,
      payload,
    };
  default:
    return state;
  }
}
