const MEAL_API = 'https://www.themealdb.com/api/';
const COCKTAIL_API = 'https://www.thecocktaildb.com/api/';

export const headerSearch = async (search, type, typeAPI) => {
  const apiBase = typeAPI ? COCKTAIL_API : MEAL_API;
  let results = {};
  if (type === 'ingredients') {
    results = await fetch(`${apiBase}json/v1/1/filter.php?i=${search}`)
      .then((response) => response.json());
  } else if (type === 'name') {
    results = await fetch(`${apiBase}json/v1/1/search.php?s=${search}`)
      .then((response) => response.json());
  } else {
    if (search.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    results = await fetch(`${apiBase}json/v1/1/search.php?f=${search}`)
      .then((response) => response.json());
  }
  return results;
};

export const fetchFood = async () => {
  const result = await fetch(`${MEAL_API}json/v1/1/random.php`);
  const json = await result.json();
  return json;
};

export const fetchDrink = async () => {
  const result = await fetch(`${COCKTAIL_API}json/v1/1/random.php`);
  const json = await result.json();
  return json;
};
