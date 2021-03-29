import { useState, useEffect } from 'react';

const useInProgressRecipeHook = () => {
  const initialValue = { cocktails: {}, meals: {} };
  const [inProgressRecipes, setInProgressRecipes] = useState(initialValue);

  useEffect(() => {
    const localData = localStorage.getItem('inProgressRecipes');
    const inProgress = localData ? JSON.parse(localData) : {};
    setInProgressRecipes(inProgress);
  }, []);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [inProgressRecipes]);

  const addFoodInProgress = (recipe) => {
    const { cocktails, meals } = inProgressRecipes;
    setInProgressRecipes({
      cocktails,
      meals: Object.assign(meals, recipe),
    });
  };

  const addDrinkInProgress = (recipe) => {
    const { cocktails, meals } = inProgressRecipes;
    setInProgressRecipes({
      cocktails: Object.assign(cockitails, recipe),
      meals,
    });
  };

  return [addFoodInProgress, addDrinkInProgress, inProgressRecipes];
};

export default useInProgressRecipeHook;

// inProgressRecipes =
// {
//   cocktails: {
//       id-da-bebida: [lista-de-ingredientes-utilizados],
//       ...
//   },
//   meals: {
//       id-da-comida: [lista-de-ingredientes-utilizados],
//       ...
//   }
// }
