export const baseURL = 'https://www.themealdb.com/api/json/v1/1/';
export const filterFoods = async (filter, query) => {
  const type = filter === 'i' ? 'filter.php?' : 'search.php?';
  const response = await fetch(`${baseURL}${type}${filter}=${query}`);
  const { meals } = await response.json();
  return meals;
};
