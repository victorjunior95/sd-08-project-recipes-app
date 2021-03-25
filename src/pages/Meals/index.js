import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';

import RecipesContext from '../../context/RecipesContext';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MealCard from '../../components/MealCard';
import CategoryBar from '../../components/CategoryBar';
import { LIMIT_OF_CARDS } from '../../common/defs';
import Footer from '../../components/Footer';

export default function Meals() {
  const { meals, isShow, setShouldRenderAll } = useContext(RecipesContext);

  useEffect(() => (
    () => {
      setShouldRenderAll(true);
    }
  ));

  return (
    <div className="meals-page">
      <Header title="Comidas" />
      {isShow && <SearchBar type="meals" />}
      <CategoryBar type="meals" />
      {meals.map((meal, index) => {
        if (meals.length === 1 && !meals[0].idMeal) {
          return <Redirect to={ `/comidas/${meals[0].idMeal}` } />;
        }
        if (index < LIMIT_OF_CARDS) {
          return (
            <MealCard key={ index } meal={ meal } index={ index } />
          );
        }
        return null;
      })}
      <Footer />
    </div>
  );
}
