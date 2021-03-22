import React, { useContext } from 'react';
import Header from '../../components/Header';
import RecipesContext from '../../context/RecipesContext';

export default function CocktailsIngredients() {
  const { setTitleState, isLoading } = useContext(RecipesContext);
  setTitleState();

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <Header />
    </div>
  );
}
