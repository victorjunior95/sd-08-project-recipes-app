import React, { useContext } from 'react';
import { Redirect } from 'react-router';

import RecipesContext from '../../context/RecipesContext';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MealCard from '../../components/MealCard';
import Footer from '../../components/Footer';

const LIMIT_OF_CARDS = 12;

export default function Meals() {
  const { setTitleState, isLoading, meals } = useContext(RecipesContext);
  setTitleState();

  if (isLoading) return <p>Carregando...</p>;
  return (
    <div className="meals-page">
      <Header />
      <SearchBar type="meals" />
      {meals.map((meal, index) => {
        if (meals.length === 1) {
          return <Redirect to={ `/comidas/${meals[0].idMeal}` } />;
        }
        if (index < LIMIT_OF_CARDS) {
          return <MealCard key={ index } meal={ meal } index={ index } />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
}
