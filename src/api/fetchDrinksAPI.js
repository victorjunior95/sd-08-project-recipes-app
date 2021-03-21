async function fetchDrinksAPI() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const TWELVE_MEALS = 12;
  const drinksJSON = await fetch(url);
  const drinks = await drinksJSON.json();
  return drinks.drinks.slice(0, TWELVE_MEALS);
}

export default fetchDrinksAPI;
