export const setMealsToken = (token) => localStorage.setItem('mealsToken', token);

export const setCocktailsToken = (token) => localStorage.setItem('cocktailsToken', token);

export const updateUser = (userData) => {
  const oldUser = JSON.parse(localStorage.getItem('user'));
  const newUser = { ...oldUser, ...userData };
  localStorage.setItem('user', JSON.stringify(newUser));
};
