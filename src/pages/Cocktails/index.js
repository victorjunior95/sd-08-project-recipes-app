import React, { useContext } from 'react';
import { Redirect } from 'react-router';

import RecipesContext from '../../context/RecipesContext';

import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import DrinkCard from '../../components/DrinkCard';

const LIMIT_OF_CARDS = 12;

function Cocktails() {
  const { setTitleState, isLoading, drinks } = useContext(RecipesContext);
  setTitleState();

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <Header />
      <SearchBar type="cocktails" />
      {drinks.map((drink, index) => {
        if (drinks.length === 1) {
          console.log(drinks);
          return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;
        }
        if (index < LIMIT_OF_CARDS) {
          return <DrinkCard key={ index } drink={ drink } index={ index } />;
        }
        return null;
      })}
    </div>
  );
}

export default Cocktails;
