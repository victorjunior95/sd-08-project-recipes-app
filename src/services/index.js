// import { fetchDrinks, fetchDrinkById } from './drinksAPI';
// import { fetchMeals, fetchMealById } from './mealsAPI';
import fetchDrinkById from './drinkByIdAPI';
import fetchDrinks from './drinksAPI';
import fetchMeals from './mealsAPI';
import fetchMealById from './mealsByIdAPI';
import fetchCategoriesDrink from './drinkCategory';
import fetchCategoriesFood from './foodCategory';
import fetchFoodByCategory from './foodByCategory';
import fetchDrinkByCategory from './drinkByCategory';

const api = {
  fetchDrinks,
  fetchDrinkById,
  fetchMeals,
  fetchMealById,
  fetchCategoriesDrink,
  fetchCategoriesFood,
  fetchFoodByCategory,
  fetchDrinkByCategory,
};

export default api;
