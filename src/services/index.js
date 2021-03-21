// import { fetchDrinks, fetchDrinkById } from './drinksAPI';
// import { fetchMeals, fetchMealById } from './mealsAPI';
import fetchDrinkById from './drinkByIdAPI';
import fetchDrinks from './drinksAPI';
import fetchMeals from './mealsAPI';
import fetchMealById from './mealsByIdAPI';

const api = {
  fetchDrinks,
  fetchDrinkById,
  fetchMeals,
  fetchMealById,
};

export default api;
