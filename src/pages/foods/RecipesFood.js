import React, { useContext } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';
import RecipesContext from '../../ContextApi/RecipesContext';

function RecipesFood() {
  const { recipes } = useContext(RecipesContext);
  console.log(recipes);

  return (
    <div>
      <Header title="Comidas" />
      <ul>
        {/* {recipes.length > 0
          ? Object.values(recipes)
            .map((recipe, i) => <li key={ i }><img src={ recipe.meals.strMealThumb } alt="img" /></li>)
            : null} */}
      </ul>
      <Footer />
    </div>
  );
}

export default RecipesFood;
