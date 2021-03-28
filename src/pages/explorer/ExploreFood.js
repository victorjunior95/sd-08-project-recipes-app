import React, { useContext } from 'react';
import ExploreFoodOrDrink from '../../components/ExploreFoodOrDrink';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';
import RecipesContext from '../../ContextApi/RecipesContext';

export default function ExploreFood() {
  const { recipes } = useContext(RecipesContext);
  const recipeMeals = recipes.meals;

  return (
    <div>
      <Header title="Explorar Comidas" search="false" />
      {
        recipeMeals
        && recipeMeals.map((recipe, i) => (
          <ExploreFoodOrDrink
            key={ i }
            foodOrDrink="comidas"
            meals={ recipe }
          />))
      }
      <Footer />
    </div>
  );
}
