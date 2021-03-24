async function fetchComidasAPI() {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const TWELVE_MEALS = 12;
  const comidasJSON = await fetch(endpoint);
  const comidas = await comidasJSON.json();
  console.log(comidas);
  return comidas.meals.slice(0, TWELVE_MEALS);
}

export default fetchComidasAPI;
