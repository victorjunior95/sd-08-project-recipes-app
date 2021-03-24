import React, { useContext } from 'react';
import FoodCard from '../../components/FoodCard';
import Header from '../../components/Header';
import RecipesContext from '../../ContextApi/RecipesContext';

function RecipesFood() {
  const { recipes } = useContext(RecipesContext);

  const recipeMeals = recipes.meals;

  return (
    <div>
      <Header title="Comidas" />
      {
        recipeMeals
        && recipeMeals.map((recipe, i) => <FoodCard key={ i } recipes={ recipe } />)
      }
    </div>
  );
}

export default RecipesFood;
