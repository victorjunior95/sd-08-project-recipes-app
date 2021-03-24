import {
  fetchFoodsByLetter,
  fetchFoodsByName,
  fetchFoodsByIngredients,
} from '../../services';

export const START_REQUEST_FOODS_RECIPE = 'START_REQUEST_FOODS_RECIPE';
export const REQUEST_FOODS_RECIPE_SUCCESS = 'REQUEST_FOODS_RECIPE_SUCCESS';
export const REQUEST_FOODS_RECIPE_ERROR = 'REQUEST_FOODS_RECIPE_ERROR';

const requestFoodsRecipe = () => ({
  type: START_REQUEST_FOODS_RECIPE,
  isFetching: true,
});

const requestFoodsRecipeSuccess = (recipes) => ({
  type: REQUEST_FOODS_RECIPE_SUCCESS,
  recipes,
  isFetching: false,

});

const requestFoodsRecipeError = (error) => ({
  type: REQUEST_FOODS_RECIPE_ERROR,
  error,
  isFetching: false,
});

const createRequestFoodsRecipe = (search) => ({
  ingredient: fetchFoodsByIngredients(search),
  name: fetchFoodsByName(search),
  firstLetter: fetchFoodsByLetter(search),
});

export const fetchFood = ({ search, searchRadio }) => async (dispatch) => {
  dispatch(requestFoodsRecipe());
  try {
    const fetchA = createRequestFoodsRecipe(search);
    const foodsRecipe = await fetchA[searchRadio];
    dispatch(requestFoodsRecipeSuccess(foodsRecipe));
  } catch (error) {
    dispatch(requestFoodsRecipeError(error));
  }
};
