export async function FecthDrinks(radio, inputName) {
  let URL = '';
  if (radio === 'Ingrediente') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputName}`;
  }
  if (radio === 'Nome') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputName}`;
  }
  if (radio === 'Primeira Letra') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputName}`;
  }
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function FetchDrinksOnMount() {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}