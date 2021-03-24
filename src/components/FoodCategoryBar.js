import React, { useContext } from 'react';
import FoodContext from '../context/comidaContext/FoodContext';

function FoodCategoryBar() {
  const {
    values: { foodCategory },
    functions: { handleFilteredMeals },
  } = useContext(FoodContext);
  const maxCategories = 5;

  return (
    <div className="search-button-container">
      <button
        type="button"
        key="All"
        data-testid="All-category-filter"
        className="search-button"
        onClick={ handleFilteredMeals }
      >
        All
      </button>
      {foodCategory.map(({ strCategory }, index) => {
        if (index >= maxCategories) {
          return '';
        }
        return (
          <button
            type="button"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            className="search-button"
            onClick={ handleFilteredMeals }
          >
            {strCategory}
          </button>
        );
      })}
    </div>
  );
}

export default FoodCategoryBar;
