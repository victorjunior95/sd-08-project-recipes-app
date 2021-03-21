async function fetchMealsAPI() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const TWELVE_MEALS = 12;
  const mealsJSON = await fetch(url);
  const meals = await mealsJSON.json();
  return meals.meals.slice(0, TWELVE_MEALS);
}

export default fetchMealsAPI;
