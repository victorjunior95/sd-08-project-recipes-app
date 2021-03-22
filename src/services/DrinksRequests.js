export const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const filterDrinks = async (filter, query) => {
  const type = filter === 'i' ? 'filter.php?' : 'search.php?';
  const response = await fetch(`${baseURL}${type}${filter}=${query}`);
  const { drinks } = await response.json();
  return drinks;
};
