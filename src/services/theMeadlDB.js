export async function FetchFoodsOnMount() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL);
  const data = await response.json();
  const { meals } = data;
  return meals;
}

export async function FetchFoodsCategories() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(URL);
  const data = await response.json();
  const { meals: categories } = data;
  return categories;
}

export async function FecthMeals(radio, inputName) {
  let URL = '';
  if (radio === 'Ingrediente') {
    URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputName}`;
  }
  if (radio === 'Nome') {
    URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`;
  }
  if (radio === 'Primeira Letra') {
    URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputName}`;
  }
  const response = await fetch(URL);
  const data = await response.json();
  const { meals } = data;
  return meals;
}

export async function filterFoodsByButton(category) {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(URL);
  const data = await response.json();
  const { meals } = data;
  return meals;
}

export async function getMealDetails(id) {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  const { meals } = data;
  return meals;
}
