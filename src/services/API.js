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

export async function requestMealDrink() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const json = await request.json();
  return json;
}
