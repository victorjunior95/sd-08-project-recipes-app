export default async function resultadoApiBebidas(type, search) {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${type}=${search}`;
  const results = await fetch(endpoint);
  const resultsJson = await results.json();
  return resultsJson;
}
