import React, { useContext } from 'react';
import RecipesContext from '../ContextApi/RecipesContext';
import CategoryButton from './CategoryButton';

export default function DrinkCategoryButton() {
  const { DrinkCategories } = useContext(RecipesContext);
  const categories = DrinkCategories.drinks;
  const maxCategories = 5;

  return (
    <div>
      {
        categories
        && categories.map((drinks, index) => (
          index < maxCategories
          && <CategoryButton key={ drinks.strCategory } categories={ drinks } />
        ))
      }
    </div>
  );
}
