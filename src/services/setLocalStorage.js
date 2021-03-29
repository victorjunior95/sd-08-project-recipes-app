export const setMealsToken = () => {
  localStorage.setItem('mealsToken', '1');
};

export const setCocktailsToken = () => {
  localStorage.setItem('cocktailsToken', '1');
};

export const setUser = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};

export const setInProgressRecipes = (id, type, ingredients) => {
  let prevProgressState = {};
  const ingredientsObj = {};
  ingredientsObj[id] = ingredients;
  if (localStorage.getItem('inProgressRecipes') !== null) {
    prevProgressState = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (type === 'Comidas') {
      prevProgressState.meals = { ...prevProgressState.meals, ...ingredientsObj };
    } else if (type === 'Bebidas') {
      prevProgressState.cocktails = { ...prevProgressState.cocktails, ...ingredientsObj };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(prevProgressState));
  } else {
    const inProgressObject = {};
    if (type === 'Comidas') {
      inProgressObject.meals = { ...ingredientsObj };
    } else if (type === 'Bebidas') {
      inProgressObject.cocktails = { ...ingredientsObj };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressObject));
  }
};
