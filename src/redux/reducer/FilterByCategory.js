import { CATEGORIES_FOODS_FILTER, CATEGORIES_DRINKS_FILTER } from '../actions';

const INITIAL_STATE = {
  foodsFilterCategories: [],
  drinksFilterCategories: [],
};

const FilterByCategory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CATEGORIES_FOODS_FILTER:
    return {
      ...state,
      foodsFilterCategories: action.payload.foods,
    };
  case CATEGORIES_DRINKS_FILTER:
    return {
      ...state,
      drinksFilterCategories: action.payload.drinks,
    };
  default:
    return state;
  }
};

export default FilterByCategory;
