import { useState, useEffect } from 'react';

const initialValue = { cocktails: {}, meals: {} };
const useInProgressRecipeHook = () => {
  const [inProgressRecipes, setInProgressRecipes] = useState(initialValue);
  const [isInProgress, setIsInProgress] = useState(false);

  useEffect(() => {
    const localData = localStorage.getItem('inProgressRecipes');
    const inProgress = localData ? JSON.parse(localData) : initialValue;
    setInProgressRecipes(inProgress);
  }, []);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [inProgressRecipes]);

  const addFoodInProgress = (recipe) => {
    const { meals, cocktails } = inProgressRecipes;
    console.log('em progresso: ', inProgressRecipes);
    const newFoodInProgress = {
      cocktails,
      meals: Object.assign(meals, recipe),
    };
    return setInProgressRecipes(newFoodInProgress);
  };

  const addDrinkInProgress = (recipe) => {
    const { meals, cocktails } = inProgressRecipes;
    console.log('em progresso: ', inProgressRecipes);
    const newDrinkInProgress = {
      meals,
      cocktails: Object.assign(cocktails, recipe),
    };
    return setInProgressRecipes(newDrinkInProgress);
  };

  function checkIsInProgress(idNumber) {
    const { meals, cocktails } = inProgressRecipes;
    if (Object.keys(meals).includes(idNumber)
    || Object.keys(cocktails).includes(idNumber)) {
      return setIsInProgress(true);
    }
    return setIsInProgress(false);
  }

  return [
    addFoodInProgress,
    addDrinkInProgress,
    checkIsInProgress,
    isInProgress,
    inProgressRecipes,
  ];
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
