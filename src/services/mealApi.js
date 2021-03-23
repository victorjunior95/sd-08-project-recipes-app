import fetchEndpoint from './utils';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getByIngredient = (ingredient) => (
  fetchEndpoint(`${BASE_URL}/filter.php?i=${ingredient}`)
);

export const getByName = (name) => (
  fetchEndpoint(`${BASE_URL}/search.php?s=${name}`)
);

export const getByFirstLetter = (firstLetter) => (
  fetchEndpoint(`${BASE_URL}/search.php?f=${firstLetter}`)
);

export const getCategories = () => (
  fetchEndpoint(`${BASE_URL}/list.php?c=list`)
);
