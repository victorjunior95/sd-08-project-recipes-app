import React, { useContext } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';
import RecipesContext from '../../ContextApi/RecipesContext';
import CocktailCard from '../../components/cards/CocktailCard';
import DrinkCategoryButton from '../../components/DrinkCategoryButton';

function Cocktails() {
  const { cocktails } = useContext(RecipesContext);

  const cocktailsRecipes = cocktails.drinks;
  const cardMaximun = 12;
  return (
    <>
      <Header title="Bebidas" search="" />
      <DrinkCategoryButton />
      {
        cocktailsRecipes
        && cocktailsRecipes.map((recipe, i) => (
          i < cardMaximun
           && <CocktailCard key={ i } order={ i } recipes={ recipe } />
        ))
      }
      <Footer />
    </>
  );
}

export default Cocktails;
