export const requestByName = async (name) => {
  const path = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(path);
  const data = await response.json();
  return data.meals;
};

export const requestByIngredient = async (ingredient) => {
  const path = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(path);
  const data = await response.json();
  return data.meals;
};

export const requestByFirstLetter = async (letter) => {
  const path = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  const response = await fetch(path);
  const data = await response.json();
  return data.meals;
};

export const requestMainFoods = async () => {
  const path = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(path);
  const data = await response.json();
  return data.meals;
};
