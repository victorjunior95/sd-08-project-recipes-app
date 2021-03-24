export async function requestRecipesList() {
  const response = await ((await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json());
  const { meals } = response;
  return meals;
}

export async function requestDrinksList() {
  const response = await ((await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json());
  const { drinks } = response;
  return drinks;
}

export async function requestMealRecipe(id) {
  const response = await ((await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json());
  const { meals } = response;
  return meals;
}

export async function requestDrinkRecipe(id) {
  const response = await ((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)).json());
  const { drinks } = response;
  return drinks;
}
