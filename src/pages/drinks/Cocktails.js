import React, { useContext } from 'react';
import { isNull } from 'lodash-es';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';
import RecipesContext from '../../ContextApi/RecipesContext';
import CocktailCard from '../../components/CocktailCard';
import DrinkCategoryButton from '../../components/DrinkCategoryButton';

function Cocktails() {
  const { cocktails } = useContext(RecipesContext);

  const cocktailsRecipes = cocktails.drinks;
  const cardMaximun = 12;

  if (isNull(cocktailsRecipes)) {
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return (
    <div>
      <Header title="Bebidas" search="" />
      <DrinkCategoryButton />
      { cocktailsRecipes
        && cocktailsRecipes.map((recipe, i) => (
          i < cardMaximun
           && <CocktailCard key={ i } order={ i } recipes={ recipe } />
        ))}
      <Footer />
    </div>
  );
}

export default Cocktails;
