import { FILTERED_FOODS } from '../actions';

const INITIAL_STATE = {
  foods: [],
};

const FilteredFoodsRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FILTERED_FOODS:
    return {
      ...state,
      foods: action.payload.foods,
    };
  default:
    return state;
  }
};

export default FilteredFoodsRecipes;
