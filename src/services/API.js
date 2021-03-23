export async function SearchMealByIngredient(ingredient) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await request.json();
  return json;
}

export async function SearchMealByName(name) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const json = await request.json();
  return json;
}

export async function SearchMealByFirstLetter(firstLetter) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const json = await request.json();
  return json;
}

export async function requestMealRecipe() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const json = await request.json();
  return json;
}

export async function SearchCocktailByIngredient(ingredient) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await request.json();
  return json;
}

export async function requestDrinkRecipe() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const json = await request.json();
  return json;
}

export async function SearchCocktailByName(name) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const json = await request.json();
  return json;
}

export async function SearchCocktailByFirstLetter(firstLetter) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const json = await request.json();
  return json;
}

export async function requestFoodCategory() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const json = await request.json();
  return json;
}

export async function requestDrinksCategory() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const json = await request.json();
  return json;
}

export async function requestDrinkId(id) {
  const results = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)).json();
  return results;
}

export async function requestFoodId(id) {
  const results = await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json();
  return results;
}
