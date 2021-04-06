import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { isNull } from 'lodash-es';
import { Link } from 'react-router-dom';
import FoodCategoryButton from '../../components/FoodCategoryButton';
import FoodCard from '../../components/cards/FoodCard';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';
import RecipesContext from '../../ContextApi/RecipesContext';

function RecipesFood() {
  const { recipes, history } = useContext(RecipesContext);

  const recipeMeals = recipes.meals;
  const cardMaximun = 12;

  const isNotUndefined = recipeMeals !== undefined;
  const isNotNull = recipeMeals !== null;

  if (isNotUndefined && isNotNull && recipeMeals.length === 1) {
    history.push(`/comidas/${recipeMeals[0].idMeal}`);
  }
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
<<<<<<< HEAD
           && (
             <Link
               to={ `comidas/${recipe.idMeal} ` }
             >
               <FoodCard key={ i } order={ i } recipes={ recipe } />
             </Link>
           )
=======
             && (
               <Link to={ recipe.idMeal }>
                 <FoodCard key={ i } order={ i } recipes={ recipe } />
               </Link>
             )
>>>>>>> ad948a0fb887a54ca775f78d68cc1bc2c3a0e97f
        ))}
      <Footer />
    </div>
  );
}

export default RecipesFood;
