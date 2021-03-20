// radio buttons
// const FOOD_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}';
// const FOOD_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s={nome}';
// const FOOD_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}';
const TEST = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

/*
  Se o radio selecionado for `Primeira letra` e a busca na API for feita com mais de uma letra,
  deve-se exibir um `alert` com a mensgem "Sua busca deve conter somente 1 (um) caracter".
*/

const fetchMeals = () => fetch(TEST);

export default fetchMeals;
