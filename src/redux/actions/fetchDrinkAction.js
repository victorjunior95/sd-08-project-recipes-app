import { fetchCocktailByFirstLetter,
  fetchCocktailByIngredients, fetchCocktailByName } from '../../services/CocktailAPI';
import { FETCH_API } from './index';

const fetchDrinkAction = (recipes) => ({
  type: FETCH_API,
  payload: {
    recipes,
  },
});

const fetchDrinkThunk = (input, type) => async (dispatch) => {
  if (!type && !input) {
    const { drinks } = await fetchCocktailByName(input);
    dispatch(fetchDrinkAction(drinks));
  }
  if (type === 'name') {
    const { drinks } = await fetchCocktailByName(input);
    dispatch(fetchDrinkAction(drinks));
  }
  if (type === 'ingredient') {
    const { drinks } = await fetchCocktailByIngredients(input);
    dispatch(fetchDrinkAction(drinks));
  }
  if (type === 'first-letter') {
    const { drinks } = await fetchCocktailByFirstLetter(input);
    dispatch(fetchDrinkAction(drinks));
  }
};

export default fetchDrinkThunk;
