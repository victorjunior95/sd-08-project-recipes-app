export async function fetchFoodApiByName(name) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json());
  return meals;
}

export async function fetchFoodApiByLetter(letter) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json());
  return meals;
}

export async function fetchFoodApiById(id) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json());
  return meals[0];
}

export async function fetchFoodApiByIngredient(ingredient) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json());
  return meals;
}

export async function fetchFoodRecomendation() {
  const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json());
  const MIN = 0;
  const MAX = 6;
  const sixMeals = [...meals].slice(MIN, MAX);
  return [...sixMeals];
}

export async function fetchDrinkApiByName(name) {
  const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json());
  return drinks;
}

export async function fetchDrinkApiByLetter(letter) {
  const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json());
  return drinks;
}

export async function fetchDrinkApiById(id) {
  const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json());
  return drinks[0];
}

export async function fetchDrinkApiByIngredient(ingredient) {
  const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`)
    .then((response) => response.json());
  return drinks;
}

export async function fetchDrinkRecomendation() {
  const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json());
  const MIN = 0;
  const MAX = 6;
  const sixDrinks = [...drinks].slice(MIN, MAX);
  return [...sixDrinks];
}
