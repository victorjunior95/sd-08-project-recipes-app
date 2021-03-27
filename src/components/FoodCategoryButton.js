import React, { useContext } from 'react';
import RecipesContext from '../ContextApi/RecipesContext';
import CategoryButton from './CategoryButton';

export default function FoodCategoryButton() {
  const { allCategories } = useContext(RecipesContext);
  const categories = allCategories.meals;
  const maxCategories = 5;

  return (
    <div>
      {
        categories
        && categories.map((meals, index) => (
          index < maxCategories
          && <CategoryButton key={ meals.strCategory } categories={ meals } />
        ))
      }
    </div>
  );
}
