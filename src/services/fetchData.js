const END_POINTS = {
  FOODS: {
    category: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    region: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    ingredients: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    letter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
  },
  DRINKS: {
    category: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    ingredients: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
    name: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    letter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
  },
};

const fetchAPI = (andPoint) => fetch(andPoint).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const fetchFoodsByCategories = () => fetchAPI(END_POINTS.FOODS.category);
export const fetchFoodsByRegion = () => fetchAPI(END_POINTS.FOODS.region);
export const fetchFoodsByIngredients = (value) => fetchAPI(`${END_POINTS.FOODS
  .ingredients}${value}`);
export const fetchFoodsByName = (value) => fetchAPI(`${END_POINTS.FOODS.name}${value}`);
export const fetchFoodsByLetter = (value) => fetchAPI(`${END_POINTS.FOODS
  .letter}${value}`);
export const fetchDrinksByCategories = () => fetchAPI(END_POINTS.DRINKS.category);
export const fetchDrinksByIngredients = (value) => fetchAPI(`${END_POINTS.DRINKS
  .ingredients}${value}`);
export const fetchDrinksByName = (value) => fetchAPI(`${END_POINTS.DRINKS.name}${value}`);
export const fetchDrinksByLetter = (value) => fetchAPI(`${END_POINTS.DRINKS
  .letter}${value}`);

export default fetchAPI;