const FOOD_API = 'https://www.themealdb.com/api.php';
const DRINK_API = 'https://www.thecocktaildb.com/api.php';
const INGREDIENT_API = 'https://www.themealdb.com/api/json/v1/1/filter.php';
const SEARCH_BASE_API = 'https://www.themealdb.com/api/json/v1/1/search.php';
const FOOD_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export const filterIngredient = async (endpoint) => {
  const api = await fetch(`${INGREDIENT_API}?i=${endpoint}`);
  const result = await api.json();
  return result;
};

export const filterName = async (endpoint) => {
  const api = await fetch(`${SEARCH_BASE_API}?s=${endpoint}`);
  const result = await api.json();
  return result;
};

export const filterFirstLetter = async (endpoint) => {
  // if (endpoint.length > 1) {
  //   // eslint-disable-next-line no-alert
  //   alert('Sua busca deve conter somente 1 (um) caracter');
  //   return;
  // }
  const api = await fetch(`${SEARCH_BASE_API}?f=${endpoint}`);
  const result = await api.json();
  return result;
};

export const apiFood = async () => {
  const api = await fetch(FOOD_API);
  const result = await api.json();
  return result;
};

export const apiFoodId = async (id) => {
  const api = await fetch(FOOD_DETAILS + id);
  const result = await api.json();
  return result;
};

export const apiDrink = async () => {
  const api = await fetch(DRINK_API);
  const result = await api.json();
  return result;
};
