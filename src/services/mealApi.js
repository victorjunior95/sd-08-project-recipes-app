import fetchEndpoint from './utils';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getIngredients = (ingredient) => (
  fetchEndpoint(`${BASE_URL}/filter.php?i=${ingredient}`)
);

export const getCategories = (ingredient) => (
  fetchEndpoint(`${BASE_URL}/filter.php?c=${ingredient}`)
);

export const getAreas = (ingredient) => (
  fetchEndpoint(`${BASE_URL}/filter.php?a=${ingredient}`)
);

export const getByIngredient = (ingredient) => (
  fetchEndpoint(`${BASE_URL}/filter.php?i=${ingredient}`)
);

export const getByName = (name = '') => (
  fetchEndpoint(`${BASE_URL}/search.php?s=${name}`)
);

export const getByFirstLetter = (firstLetter) => (
  fetchEndpoint(`${BASE_URL}/search.php?f=${firstLetter}`)
);

export const getRandomMeal = () => (
  fetchEndpoint(`${BASE_URL}/random.php`)
);

export const getMealById = (id) => (
  fetchEndpoint(`${BASE_URL}/lookup.php?i=${id}`)
);

export const getByCategory = (category) => (
  fetchEndpoint(`${BASE_URL}/filter.php?c=${category}`)
);
