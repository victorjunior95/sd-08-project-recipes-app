import { fetchData } from '../utils';

const AND_POINT_BY_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const AND_POINT_BY_INGREDIENTS = ' https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export const fetchDrinksByCategories = () => fetchData(AND_POINT_BY_CATEGORY);
export const fetchDrinksByIngredients = () => fetchData(AND_POINT_BY_INGREDIENTS);

// drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/';
// drinksRecipes = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// drinksByCategory = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
// randomDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
// ingredientList = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
// ingredientList = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
