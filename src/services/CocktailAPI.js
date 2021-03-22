export function fetchCocktailByIngredients(ingrediente) {
  const fetchIngredientsURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;

  return fetch(fetchIngredientsURL)
    .then((r) => r.json())
    .then((resolve) => resolve);
}

export function fetchCocktailByName(nome) {
  const fetchNameURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`;

  return fetch(fetchNameURL)
    .then((r) => r.json())
    .then((resolve) => resolve);
}

export function fetchCocktailByFirstLetter(primeiraLetra) {
  const fetchFirstLetter = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`;

  return fetch(fetchFirstLetter)
    .then((r) => r.json())
    .then((resolve) => resolve);
}
