import { fetchData } from '../utils';

const AND_POINT_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const AND_POINT_API_BY_REGION = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const AND_POINT_API_INGREDIENTS = ' https://www.themealdb.com/api/json/v1/1/list.php?i=list';

export const fetchFoodsByCategories = () => fetchData(AND_POINT_BY_CATEGORY);
export const fetchFoodsByRegion = () => fetchData(AND_POINT_API_BY_REGION);
export const fetchFoodsByIngredients = () => fetchData(AND_POINT_API_INGREDIENTS);

// Api 'https://www.themealdb.com/api/json/v1/1/';
// Categories 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
// Areas 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
// Recipes 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
// ByCategory 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
// randomMeal 'https://www.themealdb.com/api/json/v1/1/random.php';
// mealByArea 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
// ingredientList = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
// const mealByIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i';
