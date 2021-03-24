const endpointIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const endpointName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const endpointFirstLetter = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

const getFoodIngredients = async (ingredient) => {
  fetch(`${endpointIngredient}${ingredient}`)
    .then((response) => response.json())
    .then(({ meals }) => console.log(meals));
};

export default getFoodIngredients;

export const getFoodName = async (name) => {
  fetch(`${endpointName}${name}`)
    .then((response) => response.json())
    .then(({ meals }) => console.log(meals));
};

export const getFoodFirstLetter = async (firstLetter) => {
  fetch(`${endpointFirstLetter}${firstLetter}`)
    .then((response) => response.json())
    .then(({ meals }) => console.log(meals));
};
