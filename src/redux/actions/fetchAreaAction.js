import { fetchAreaMeal } from '../../services/MealAPI';
import { FETCH_AREA_API } from './index';

const fetchAreaAction = (area) => ({
  type: FETCH_AREA_API,
  payload: {
    area,
  },
});

const filterToTwelve = (list) => {
  const MAX_LENGTH_RECIPES = 12;

  const filteredList = (list.length <= MAX_LENGTH_RECIPES)
    ? list : list.filter((elem, i) => i < MAX_LENGTH_RECIPES && elem);

  return filteredList;
};

const fetchAreaThunk = (area) => async (dispatch) => {
  if (!area) {
    const { areaAPI } = await fetchAreaMeal('');
    const result = filterToTwelve(areaAPI);
    dispatch(fetchAreaAction(result));
  }
  const { areaAPI } = await fetchAreaMeal(area);
  const result = filterToTwelve(areaAPI);
  dispatch(fetchAreaAction(result));
};

export default fetchAreaThunk;
