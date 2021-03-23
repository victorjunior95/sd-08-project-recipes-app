import React, { useEffect, useState } from 'react';
import components from '../components/index';
import MainDrinksCard from '../components/MainDrinksCard';
import api from '../services';
import { MAIN_FOOD_CARD_LENGTH_12, CATEGORIES_LENGTH_5 } from '../constants';

function Drinks() {
  const [dataDrinks, setDataDrinks] = useState([]);
  const [dataDrinksCategories, setDataDrinksCategories] = useState([]);
  const [drinkCategorySelected, setDrinkCategorySelected] = useState([]);

  useEffect(() => {
    api.fetchCategoriesDrink()
      .then((response) => response.json())
      .then((result) => setDataDrinksCategories(
        result.drinks.slice(0, CATEGORIES_LENGTH_5),
      ));
    if (drinkCategorySelected.length > 0) {
      api.fetchDrinkByCategory(drinkCategorySelected)
        .then((response) => response.json())
        .then((result) => setDataDrinks(result.drinks));
    } else {
      api.fetchDrinks()
        .then((response) => response.json())
        .then((result) => setDataDrinks(result.drinks));
    }
  }, [drinkCategorySelected]);
  console.log(drinkCategorySelected);
  return (
    <div>
      <components.Header title="Bebidas" />
      {dataDrinksCategories.slice(0, CATEGORIES_LENGTH_5).map(({ strCategory }, index) => (
        <button
          onClick={ ({ target }) => setDrinkCategorySelected(target.value) }
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          key={ index }
          value={ strCategory }
        >
          {strCategory}
        </button>
      ))}
      <div className="home-container">
        {dataDrinks.slice(0, MAIN_FOOD_CARD_LENGTH_12).map((drink, index) => (
          <MainDrinksCard
            key={ index }
            dataDrinks={ drink }
            index={ index }
          />
        ))}
        <components.Footer />
      </div>
    </div>
  );
}

export default Drinks;
