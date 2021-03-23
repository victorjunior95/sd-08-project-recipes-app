export function fetchMealByIngredients(ingrediente) {
  const fetchIngredientsURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;

  return fetch(fetchIngredientsURL)
    .then((r) => r.json())
    .then((resolve) => resolve);
}

export function fetchMealByName(nome) {
  const fetchNameURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`;

  return fetch(fetchNameURL)
    .then((r) => r.json())
    .then((resolve) => resolve);
}

export function fetchMealByFirstLetter(primeiraLetra) {
  const fetchFirstLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`;

  return fetch(fetchFirstLetter)
    .then((r) => r.json())
    .then((resolve) => resolve);
}

export function fetchRandomMeal() {
  const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  return fetch(randomMealURL)
    .then((r) => r.json())
    .then((resolve) => resolve);
}
