import React, { useContext } from 'react';
// import DrinkContext from '../context/bebidaContext/DrinkContext';
import FoodContext from '../context/comidaContext/FoodContext';

function FoodCategoryBar() {
  const { values: { foodCategory } } = useContext(FoodContext);
  // const { drinksCategory } = useContext(DrinkContext);
  const maxCategories = 5;
  console.log(foodCategory);
  return (
    <div>
      <button type="button" key="All">All</button>
      {foodCategory.map(({ strCategory }, index) => {
        if (index >= maxCategories) {
          return '';
        }
        return (
          <button
            type="button"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>
        );
      })}
    </div>
  );
}

export default FoodCategoryBar;
