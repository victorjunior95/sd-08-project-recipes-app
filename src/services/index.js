const getMeals = async (type, payload) => {
  let data = {};
  switch (type) {
  case 'ingredient-search':
    data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${payload}`);
    break;
  case 'name-search':
    data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${payload}`);
    break;
  case 'first-letter-search':
    data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${payload}`);
    break;
  default: return null;
  }
  const meals = await (data.json());
  return meals;
};

const getCocktails = async (type, payload) => {
  let data = {};
  switch (type) {
  case 'ingredient-search':
    data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${payload}`);
    break;
  case 'name-search':
    data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${payload}`);
    break;
  case 'first-letter-search':
    data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${payload}`);
    break;
  default: return null;
  }
  const cocktails = await (data.json());
  return cocktails;
};

export { getMeals, getCocktails };
