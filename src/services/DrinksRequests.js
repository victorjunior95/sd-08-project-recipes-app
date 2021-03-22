const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const allDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const listCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const filterDrinks = async (filter, query) => {
  const type = filter === 'i' ? 'filter.php?' : 'search.php?';
  const response = await fetch(`${baseURL}${type}${filter}=${query}`);
  const { drinks } = await response.json();
  return drinks;
};
export const getAllDrinks = async () => {
  const response = await fetch(allDrinks);
  const { drinks } = await response.json();
  return drinks;
};

export const getDrinksCategories = async () => {
  const numberOfCategories = 5;
  const response = await fetch(listCategories);
  const { drinks } = await response.json();
  return drinks.slice(0, numberOfCategories);
};
