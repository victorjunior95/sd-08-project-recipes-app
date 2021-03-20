const URL = {
  categoryFood: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  regionFood: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
  ingredientsFood: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  categoryDrink: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  ingredientsDrink:
    'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
};

const fetchData = (andPoint) => fetch(andPoint).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const fetchFoodsByCategories = () => fetchData(URL.categoryFood);
export const fetchFoodsByRegion = () => fetchData(URL.regionFood);
export const fetchFoodsByIngredients = () => fetchData(URL.ingredientsFood);

export const fetchDrinksByCategories = () => fetchData(URL.categoryDrink);
export const fetchDrinksByIngredients = () => fetchData(URL.ingredientsDrink);

export default fetchData;
