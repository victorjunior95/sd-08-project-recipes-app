import { useState, useEffect } from 'react';

const useInProgressRecipeHook = () => {
  const [inProgressRecipes, setInProgressRecipes] = useState({});

  useEffect(() => {
    const localData = localStorage.getItem('inProgressRecipes');
    const inProgress = localData ? JSON.parse(localData) : [];
    setInProgressRecipes(inProgress);
  }, []);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [inProgressRecipes]);

  const addIProgressRecipe = (recipe, type) => {
    if (type === 'comida') {
      return setInProgressRecipes({
        ...inProgressRecipes,
        meals: { [recipe.id]: recipe.ingList },
      });
    } if (type === 'bebida') {
      return setInProgressRecipes({
        ...inProgressRecipes,
        drinks: { [recipe.id]: recipe.ingList },
      });
    }
  };

  return [inProgressRecipes, addIProgressRecipe];
};

export default useInProgressRecipeHook;
