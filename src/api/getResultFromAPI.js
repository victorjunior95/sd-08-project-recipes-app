const filterString = {
  Ingredients: 'filter.php?i=',
  'busca por nome': 'search.php?s=',
  'busca da primeira letra': 'search.php?f=',
};

const urlString = {
  '/comidas': 'https://www.themealdb.com/api/json/v1/1/',
  '/bebidas': 'https://www.thecocktaildb.com/api/json/v1/1/',
};

const objParameter = {
  '/comidas': 'meals',
  '/bebidas': 'drinks',
};

async function getResultFromAPI(filter, path, text) {
  const a = filter;
  const b = path;
  const fetchURL = `${urlString[b]}${filterString[a]}${text}`;
  const apiResultJSON = await fetch(fetchURL);
  const apiResult = await apiResultJSON.json();
  return apiResult[objParameter[b]];
}

export default getResultFromAPI;
