import fetchEndpoint from './utils';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const getByIngredient = (ingredient) => (
  fetchEndpoint(`${BASE_URL}/filter.php?i=${ingredient}`)
);

export const getByName = (name) => (
  fetchEndpoint(`${BASE_URL}/search.php?s=${name}`)
);

export const getByFirstLetter = (firstLetter) => (
  fetchEndpoint(`${BASE_URL}/search.php?f=${firstLetter}`)
);

export const getRandomCocktail = () => (
  fetchEndpoint(`${BASE_URL}/random.php`)
);
