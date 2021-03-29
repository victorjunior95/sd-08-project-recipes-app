import { useState, useEffect } from 'react';

const useInProgressRecipeHook = () => {
  const [inProgressRecipes, setInProgressRecipes] = useState({});

  useEffect(() => {
    const localData = localStorage.getItem('inProgressRecipes');
    const inProgress = localData ? JSON.parse(localData) : {};
    setInProgressRecipes(inProgress);
  }, []);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [inProgressRecipes]);
};

export default useInProgressRecipeHook;
