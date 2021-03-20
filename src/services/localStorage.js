// import md5 from 'crypto-js/md5'; // Biblioteca que gera Hash

const setLocalStorage = (key, value) => {
  if (typeof value === 'string') {
    if (key === 'email') {
      const objEmail = { [key]: value };
      return localStorage.setItem('user', JSON.stringify(objEmail));
    }
    localStorage.setItem(key, JSON.stringify(value));
  }
  localStorage.setItem(key, value);
};

export const setMealsToken = () => setLocalStorage('mealsToken', '1');
export const setCocktailsToken = () => setLocalStorage('cocktailsToken', '1');
export const setUser = (value) => setLocalStorage('email', value);
export const setDoneRecipes = (recipes) => setLocalStorage('doneRecipes', recipes);
export const setFavoriteRecipe = (recipes) => setLocalStorage('favoriteRecipes', recipes);

export const setInProgressRecipe = (recipes) => {
  setLocalStorage('progressRecipes', recipes);
};
