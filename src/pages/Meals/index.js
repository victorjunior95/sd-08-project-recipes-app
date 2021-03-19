import React, { useContext } from 'react';
import RecipesContext from '../../context/RecipesContext';

import SearchBar from '../../components/SearchBar';
import MealCard from '../../components/MealCard';

const LIMIT_OF_CARDS = 12;

export default function Meals() {
  const { meals } = useContext(RecipesContext);
  return (
    <div>
      <SearchBar />
      {meals.map((meal, index) => {
        if (index < LIMIT_OF_CARDS) {
          return <MealCard key={ index } meal={ meal } />;
        }
        return null;
      })}
    </div>
  );
}
