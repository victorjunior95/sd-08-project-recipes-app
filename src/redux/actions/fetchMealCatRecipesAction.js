import { fetchRecipesMealCats } from '../../services/MealAPI';
import { FETCH_CAT_RECIPES } from './index';

const fetchRecipesMealCatsAction = (filteredRecipes) => ({
  type: FETCH_CAT_RECIPES,
  payload: {
    filteredRecipes,
  },
});

const fetchRecipesMealCatsThunk = (filter) => async (dispatch) => {
  const { meals } = await fetchRecipesMealCats(filter);
  dispatch(fetchRecipesMealCatsAction(meals));
};

export default fetchRecipesMealCatsThunk;
