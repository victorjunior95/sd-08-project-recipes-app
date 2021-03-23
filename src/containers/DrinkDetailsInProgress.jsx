import React, { useEffect, useState } from 'react';
import DrnkRecipeIngredients from '../components/recipeInProgress/DrinkRecipeIngredients';
import DrnkRecipeInstruction from '../components/recipeInProgress/DrinkRecipeInstruction';
import DrinkRecipeTop from '../components/recipeInProgress/DrinkRecipeTop';

const DrinkDetailsInProgress = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setRedirect(true);
    return () => {
      setRedirect(false);
    };
  }, [redirect]);
  return (
    <div>
      Drink Recipe In Progress
      <DrinkRecipeTop />
      <DrnkRecipeIngredients />
      <DrnkRecipeInstruction />
      <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
    </div>
  );
};

export default DrinkDetailsInProgress;
