export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user.email;
};

export const getInProgressMeals = () => {
  if (localStorage.getItem('inProgressRecipes')) {
    const inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );
    return inProgressRecipes.meals;
  }
  return null;
};

export const getInProgressCocktails = () => {
  if (localStorage.getItem('inProgressRecipes')) {
    const inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );
    return inProgressRecipes.cocktails;
  }
  return null;
};

export const nameButtonRecipe = (id, type) => {
  const startRecipe = 'Iniciar Receita';
  const continueRecipe = 'Continuar Receita';
  if (type === 'Comidas') {
    const meals = getInProgressMeals();
    if (!meals) return startRecipe;
    return Object.keys(meals).includes(id) ? continueRecipe : startRecipe;
  }
  if (type === 'Bebidas') {
    const drinks = getInProgressCocktails();
    if (!drinks) return startRecipe;
    return Object.keys(drinks).includes(id) ? continueRecipe : startRecipe;
  }
};