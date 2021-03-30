// import md5 from 'crypto-js/md5'; // Biblioteca que gera Hash

const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getLocalStorage = (key) => {
  const keyLocalStorage = localStorage.getItem(key);
  return {
    [key]: JSON.parse(keyLocalStorage) || '',
  };
};

export const setMealsTokenLocalStorage = () => setLocalStorage('mealsToken', 1);
export const setCocktailsTokenLocalStorage = () => setLocalStorage('cocktailsToken', 1);
export const setUserLocalStorage = (email) => setLocalStorage('user', { email });
export const setDoneRecipes = (recipes) => setLocalStorage('doneRecipes', recipes);
export const setFavoriteRecipe = (recipes) => setLocalStorage('favoriteRecipes', recipes);

export const setProgressDrink = () => {
  setLocalStorage('inProgressRecipes', [{ cocktails: {}, meals: {} }]);
};

export const setInProgressRecipe = (recipes) => {
  setLocalStorage('progressRecipes', recipes);
};

export const getProfileEmailLocalStorage = () => getLocalStorage('user');
export const deleteKeyLocalStorage = (key) => localStorage.clear(key);

export const getArrayIngredients = (idDrink, ingredientes) => {
  const current = JSON.parse(localStorage.getItem('inProgressRecipes'));
  console.log(current, 'entrada');
  const newValue = {
    meals: { ...current.meals },
    cocktails:
      { ...current.cocktails, [idDrink]: ingredientes },
  };
  console.log(newValue, 'saida');

  localStorage.setItem('inProgressRecipes', JSON.stringify(newValue));
};

export const getLocalDrink = () => {
  const current = JSON.parse(localStorage.getItem('inProgressRecipes'));
  return current;
};
