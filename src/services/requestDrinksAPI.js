export const requestDrinkByName = async (name) => {
  const path = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(path);
  const data = await response.json();
  return data.drinks;
};

export const requestDrinkByIngredient = async (ingredient) => {
  const path = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    return null;
  }
};

export const requestDrinkByFirstLetter = async (letter) => {
  const path = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  const response = await fetch(path);
  const data = await response.json();
  return data.drinks;
};
