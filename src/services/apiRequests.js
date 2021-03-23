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
