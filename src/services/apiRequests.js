export async function requestRecipesList() {
  const response = await ((await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json());
  const { meals } = response;
  return meals;
}

export async function requestRecipesByIngredient(ingredient) {
  const response = await ((await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)).json());
  const { meals } = response;
  return meals;
}

export async function requestRecipesByNameOrFirstLetter(type, value) {
  const response = await ((await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${value}`)).json());
  const { meals } = response;
  return meals;
}

export async function requestDrinksList() {
  const response = await ((await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json());
  const { drinks } = response;
  return drinks;
}

export async function requestDrinksByIngredient(ingredient) {
  const response = await ((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)).json());
  const { drinks } = response;
  return drinks;
}

export async function requestDrinksByNameOrFirstLetter(type, value) {
  const response = await ((await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${type}=${value}`)).json());
  const { drinks } = response;
  return drinks;
}
