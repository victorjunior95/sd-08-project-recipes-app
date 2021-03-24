export async function fetchFoodApiByName(name) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json());
  return meals;
}

export async function fetchFoodApiByLetter(letter) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json());
  return meals;
}

export async function fetchFoodApiById(id) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?i=${id}`)
    .then((response) => response.json());
  return meals;
}

export async function fetchFoodApiByIngredient(ingredient) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => response.json());
  return meals;
}

export async function fetchRandomFood() {
  const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  return meals;
}

const URLFood = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const URLList = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

export const fetchAPIFood = async () => {
  try {
    const response = await fetch(URLFood);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchListArea = async () => {
  try {
    const request = await fetch(URLList);
    const { meals } = await request.json();
    return meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoodsAreaName = async (name) => {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
    const { meals } = await request.json();
    return meals;
  } catch (error) {
    console.log(error);
  }
};
