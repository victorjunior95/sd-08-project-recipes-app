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

<<<<<<< HEAD
export async function requestMealRecipe() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
=======
export async function SearchCocktailByIngredient(ingredient) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
>>>>>>> e0c5171c39be22f387a9674682525e519af08a1e
  const json = await request.json();
  return json;
}

<<<<<<< HEAD
export async function requestMealDrink() {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
=======
export async function SearchCocktailByName(name) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const json = await request.json();
  return json;
}

export async function SearchCocktailByFirstLetter(firstLetter) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
>>>>>>> e0c5171c39be22f387a9674682525e519af08a1e
  const json = await request.json();
  return json;
}
