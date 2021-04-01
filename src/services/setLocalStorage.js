export const setMealsToken = () => {
  localStorage.setItem('mealsToken', '1');
};

export const setCocktailsToken = () => {
  localStorage.setItem('cocktailsToken', '1');
};

export const setUser = (email) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};

export const setInProgressRecipes = (id, type) => {
  let prevProgressState = {};
  const ingredientsObj = {};
  ingredientsObj[id] = [];
  if (localStorage.getItem('inProgressRecipes') !== null) {
    prevProgressState = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (type === 'Comidas' && !prevProgressState.meals[id]) {
      prevProgressState.meals = {
        ...prevProgressState.meals,
        ...ingredientsObj,
      };
    } else if (type === 'Bebidas' && !prevProgressState.cocktails[id]) {
      prevProgressState.cocktails = {
        ...prevProgressState.cocktails,
        ...ingredientsObj,
      };
    }
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify(prevProgressState),
    );
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

export const updateInProgressRecipes = (id, type, newIngredient) => {
  let localStorageRecipesProgress = [];
  if (localStorage.getItem('inProgressRecipes') !== null) {
    localStorageRecipesProgress = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );
    if (type === 'Bebidas') {
      localStorageRecipesProgress.cocktails[id] = [
        ...localStorageRecipesProgress.cocktails[id],
        newIngredient,
      ];
    } else {
      localStorageRecipesProgress.meals[id] = [
        ...localStorageRecipesProgress.meals[id],
        newIngredient,
      ];
    }
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(localStorageRecipesProgress));
};

export const setFavoriteRecipes = (recipeInfo) => {
  recipeInfo.type = recipeInfo.type.toLowerCase().replace('s', '');
  if (recipeInfo.type === 'bebida') {
    const { alcoholicOrNot } = recipeInfo;
    recipeInfo.alcoholicOrNot = recipeInfo.category;
    recipeInfo.category = alcoholicOrNot;
  }
  if (localStorage.getItem('favoriteRecipes') === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([recipeInfo]));
  } else {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const alredyFavorite = favoriteRecipes.some(
      (favorite) => favorite.id === recipeInfo.id,
    );
    if (alredyFavorite) {
      const newFavoriteRecipes = favoriteRecipes.filter(
        (favorite) => favorite.id !== recipeInfo.id,
      );
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify(newFavoriteRecipes),
      );
    } else {
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([...favoriteRecipes, recipeInfo]),
      );
    }
  }
};
