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

export async function requestRadomDrinks() {
  const response = await ((await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')).json());
  const { drinks } = response;
  return drinks;
}

export async function requestRadomRecipe() {
  const response = await ((await fetch('https://www.themealdb.com/api/json/v1/1/random.php')).json());
  const { meals } = response;
  return meals;
}

export async function requestDrinksIngredientsList() {
  const response = await ((await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')).json());
  const { drinks } = response;
  return drinks;
}

export async function requestMealsIngredientsList() {
  const response = await ((await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')).json());
  const { meals } = response;
  return meals;
}
