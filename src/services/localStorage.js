// import md5 from 'crypto-js/md5'; // Biblioteca que gera Hash

const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const setMealsToken = () => setLocalStorage('mealsToken', 1);
export const setCocktailsToken = () => setLocalStorage('cocktailsToken', 1);
export const setUserLocalStorage = (email) => setLocalStorage('user', { email });
export const setDoneRecipes = (recipes) => setLocalStorage('doneRecipes', recipes);
export const setFavoriteRecipe = (recipes) => setLocalStorage('favoriteRecipes', recipes);

export const setInProgressRecipe = (recipes) => {
  setLocalStorage('progressRecipes', recipes);
};
