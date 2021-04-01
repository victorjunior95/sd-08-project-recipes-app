import React, { useContext } from 'react';
import FoodCategoryButton from '../../components/FoodCategoryButton';
import FoodCard from '../../components/cards/FoodCard';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';
import RecipesContext from '../../ContextApi/RecipesContext';

function RecipesFood() {
  const { recipes } = useContext(RecipesContext);

  const recipeMeals = recipes.meals;
  const cardMaximun = 12;

  return (
    <div>
      <Header title="Comidas" search="" />
      <FoodCategoryButton />
      {
        recipeMeals
        && recipeMeals.map((recipe, i) => (
          i < cardMaximun
           && <FoodCard key={ i } order={ i } recipes={ recipe } />
        ))
      }
      <Footer />
    </div>
  );
}

export default RecipesFood;
