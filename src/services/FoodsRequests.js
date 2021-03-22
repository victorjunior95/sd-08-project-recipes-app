const baseURL = 'https://www.themealdb.com/api/json/v1/1/';
const allMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const listCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const filterFoods = async (filter, query) => {
  const type = filter === 'i' ? 'filter.php?' : 'search.php?';
  const response = await fetch(`${baseURL}${type}${filter}=${query}`);
  const { meals } = await response.json();
  return meals;
};

export const getAllMeals = async () => {
  const response = await fetch(allMeals);
  const { meals } = await response.json();
  return meals;
};

export const getFoodsCategories = async () => {
  const numberOfCategories = 5;
  const response = await fetch(listCategories);
  const { meals } = await response.json();
  return meals.slice(0, numberOfCategories);
};
