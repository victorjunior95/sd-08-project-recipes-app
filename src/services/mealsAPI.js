// radio buttons
// const FOOD_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}';
// const FOOD_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s={nome}';
// const FOOD_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}';
const TEST = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchMeals = () => fetch(TEST);

export default fetchMeals;
