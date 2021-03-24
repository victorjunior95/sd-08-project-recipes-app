export const headerSearch = async (search, type) => {
  let results = {};
  if (type === 'ingredients') {
    results = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((response) => response.json());
  } else if (type === 'name') {
    results = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json());
  } else {
    if (search.length > 1) {
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    results = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((response) => response.json());
  }
  return results;
};

export const fetchFood = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json());
  return result;
};

export const fetchDrink = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json());
  // console.log(result);
  return result;
};
export const categoryFood = async () => {
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json());
  console.log(result.meals);
  return result.meals;
};
export const categoryDrink = async () => {
  const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json());
  // console.log(result);
  return result.drinks;
};
export const seachFoodByCategory = async (search) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`)
    .then((response) => response.json());
  console.log(result.meals);
  return result.meals;
};
export const seachDrinkByCategory = async (search) => {
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search}`)
    .then((response) => response.json());
  // console.log(result);
  return result.drinks;
};
