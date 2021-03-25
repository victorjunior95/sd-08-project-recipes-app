import { fetchRecipesDrinkCats } from '../../services/CocktailAPI';
import { FETCH_CAT_RECIPES } from './index';

const fetchRecipesDrinkCatsAction = (filteredRecipes) => ({
  type: FETCH_CAT_RECIPES,
  payload: {
    filteredRecipes,
  },
});

const fetchRecipesDrinkCatsThunk = (filter) => async (dispatch) => {
  const { drinks } = await fetchRecipesDrinkCats(filter);
  dispatch(fetchRecipesDrinkCatsAction(drinks));
};

export default fetchRecipesDrinkCatsThunk;
