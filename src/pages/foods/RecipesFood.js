import React, { useContext } from 'react';
import { isNull } from 'lodash-es';
import FoodCategoryButton from '../../components/FoodCategoryButton';
import FoodCard from '../../components/FoodCard';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';
import RecipesContext from '../../ContextApi/RecipesContext';

function RecipesFood() {
  const { recipes } = useContext(RecipesContext);

  const recipeMeals = recipes.meals;
  const cardMaximun = 12;

  if (isNull(recipeMeals)) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return (
    <div>
      <Header title="Comidas" search="" />
      <FoodCategoryButton />
      { recipeMeals
        && recipeMeals.map((recipe, i) => (
          i < cardMaximun
           && <FoodCard key={ i } order={ i } recipes={ recipe } />
        ))}
      <Footer />
    </div>
  );
}

export default RecipesFood;
