import React, { useContext } from 'react';
import DrinkContext from '../context/bebidaContext/DrinkContext';

function DrinkCategoryBar() {
  const { values: { drinksCategory } } = useContext(DrinkContext);
  const maxCategories = 5;
  console.log(drinksCategory);

  return (
    <div>
      <button type="button" key="All">All</button>
      {drinksCategory.map(({ strCategory }, index) => {
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

export default DrinkCategoryBar;
