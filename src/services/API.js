const endpointFoodIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const endpointFoodName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const endpointFoodFirstLetter = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const endpointDrinkIngredient = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const endPointDrinkName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const endPointDrinkFirstLetter = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const endPointFoodRandom = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const returnAlert = () => {
  alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  return null;
};

export const getFoodIngredients = async (ingredient) => (
  fetch(`${endpointFoodIngredient}${ingredient}`)
    .then((response) => response.json())
    .then(({ meals }) => (meals || returnAlert()))
);

// export default getFoodIngredients;

export const getFoodName = async (name) => (
  fetch(`${endpointFoodName}${name}`)
    .then((response) => response.json())
    .then(({ meals }) => (meals || returnAlert()))
);

export const getFoodFirstLetter = async (firstLetter) => (
  fetch(`${endpointFoodFirstLetter}${firstLetter}`)
    .then((response) => response.json())
    .then(({ meals }) => meals)
);

export const getDrinkIngredients = async (ingredient) => (
  fetch(`${endpointDrinkIngredient}${ingredient}`)
    .then((response) => response.json())
    .then(({ drinks }) => (drinks || returnAlert()))
);

export const getDrinkName = async (name) => (
  fetch(`${endPointDrinkName}${name}`)
    .then((response) => response.json())
    .then(({ drinks }) => (drinks || returnAlert()))
);

export const getDrinkFirstLetter = async (firstLetter) => (
  fetch(`${endPointDrinkFirstLetter}${firstLetter}`)
    .then((response) => response.json())
    .then(({ drinks }) => drinks)
);

export const getFoodRandom = async () => {
  const results = await fetch(endPointFoodRandom).then((res) => res.json());
  const { meals } = results;
  return meals;
};
