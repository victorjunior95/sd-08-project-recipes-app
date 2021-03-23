import React, { useContext } from 'react';
import { Redirect } from 'react-router';

import RecipesContext from '../../context/RecipesContext';

import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import DrinkCard from '../../components/DrinkCard';
import CategoryBar from '../../components/CategoryBar';
import { LIMIT_OF_CARDS } from '../../common/defs';

function Cocktails() {
  const { drinks } = useContext(RecipesContext);

  return (
    <div>
      <Header title="Bebidas" />
      <SearchBar type="cocktails" />
      <CategoryBar type="cocktails" />
      {drinks.map((drink, index) => {
        if (drinks.length === 1) {
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
