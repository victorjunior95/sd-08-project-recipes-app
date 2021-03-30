export const setMealsToken = (token) => localStorage.setItem('mealsToken', token);
export const clearMealsToken = () => localStorage.removeItem('mealsToken');

export const setCocktailsToken = (token) => localStorage.setItem('cocktailsToken', token);
export const clearCocktailsToken = () => localStorage.removeItem('cocktailsToken');

export const updateUser = (userData) => {
  const oldUser = JSON.parse(localStorage.getItem('user'));
  const newUser = { ...oldUser, ...userData };
  localStorage.setItem('user', JSON.stringify(newUser));
};

export const getUser = () => localStorage.getItem('user');
export const clearUser = () => localStorage.removeItem('user');

export const clearDoneRecipes = () => localStorage.removeItem('doneRecipes');
export const clearFavoriteRecipes = () => localStorage.removeItem('favoriteRecipes');
export const clearInProgressRecipes = () => localStorage.removeItem('inProgressRecipes');

export const getInProgress = () => localStorage.getItem('inProgressRecipes');

export const clear = () => {
  clearUser();
  clearMealsToken();
  clearCocktailsToken();
  clearDoneRecipes();
  clearFavoriteRecipes();
  clearInProgressRecipes();
};
