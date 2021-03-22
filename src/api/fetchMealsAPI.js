async function fetchMealsAPI() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const mealsJSON = await fetch(url);
  const meals = await mealsJSON.json();
  return meals.meals;
}

// construir nova req de api pra filtrar a requisição

export default fetchMealsAPI;
