import { fetchFistMealCats } from '../../services/MealAPI';
import { FETCH_CATEGORIES } from './index';

const fetchMealCatsAction = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: {
    categories,
  },
});

const fetchDrinkCatsThunk = () => async (dispatch) => {
  const MealCats = await fetchFistMealCats();
  dispatch(fetchMealCatsAction(MealCats));
};

export default fetchDrinkCatsThunk;
