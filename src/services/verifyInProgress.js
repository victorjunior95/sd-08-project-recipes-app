function verifyInProgress(id, type) {
  let startRecipe = {
    cocktails: {
      [id]: [],
    },
    meals: {},
  };

  if (type === 'meals') {
    startRecipe = {
      cocktails: {},
      meals: {
        [id]: [],
      },
    };
  }

  const savedRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  console.log(savedRecipes);

  if (!savedRecipes) {
    localStorage.setItem('inProgressRecipes', JSON.stringify(startRecipe));
    console.log(startRecipe);
  } else {
    savedRecipes[type][id] = [];
    localStorage.setItem('inProgressRecipes', JSON.stringify(savedRecipes));
    console.log(savedRecipes);
  }
}

export default verifyInProgress;
