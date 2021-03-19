// categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
// areas: https://www.themealdb.com/api/json/v1/1/list.php?a=list
// ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list

const MEAL_API = 'https://www.themealdb.com/api/';
// const COCKTAIL_API = 'https://www.thecocktaildb.com/api/';

const fetchFood = async () => {
  const result = await fetch(`${MEAL_API}json/v1/1/random.php`);
  const json = await result.json();
  return json;
};
export default fetchFood;

// const fetchDrink = async () => {
//   const result = await fetch(`${COCKTAIL_API}json/v1/1/random.php`);
//   const json = await result.json();
//   return json;
// };
// export fetchDrink;
