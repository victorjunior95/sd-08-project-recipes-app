export default async function resultadoApiComidas(type, search) {
  const endpoint = type === 'i' ? `https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${search}` : `https://www.themealdb.com/api/json/v1/1/search.php?${type}=${search}`;
  const results = await fetch(endpoint);
  const resultsJson = await results.json();
  return resultsJson.meals;
}
