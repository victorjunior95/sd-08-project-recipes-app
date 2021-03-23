import React, { useEffect, useState } from 'react';
import components from '../components/index';
import MainDrinksCard from '../components/MainDrinksCard';
import api from '../services';
import { MAIN_FOOD_CARD_LENGTH_12, CATEGORIES_LENGTH_5 } from '../constants';

function Drinks() {
  const [dataDrinks, setDataDrinks] = useState([]);
  const [dataDrinksCategories, setDataDrinksCategories] = useState([]);
  const [drinkCategorySelected, setDrinkCategorySelected] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(false);

  function handleClick({ target }) {
    setDrinkCategorySelected(target.value);
    if (drinkCategorySelected !== target.value && drinkCategorySelected.length > 0) {
      setSelectedDrink(selectedDrink);
    } else { setSelectedDrink(!selectedDrink); }
  }

  useEffect(() => {
    api.fetchCategoriesDrink()
      .then((response) => response.json())
      .then((result) => setDataDrinksCategories(
        result.drinks.slice(0, CATEGORIES_LENGTH_5),
      ));
    if (drinkCategorySelected.length && selectedDrink) {
      api.fetchDrinkByCategory(drinkCategorySelected)
        .then((response) => response.json())
        .then((result) => setDataDrinks(result.drinks));
    } else {
      api.fetchDrinks()
        .then((response) => response.json())
        .then((result) => setDataDrinks(result.drinks));
    }
  }, [drinkCategorySelected, selectedDrink]);
  return (
    <div>
      <components.Header title="Bebidas" />
      <div>

        {dataDrinksCategories.slice(0, CATEGORIES_LENGTH_5).map(
          ({ strCategory }, index) => (
            <button
              onClick={ handleClick }
              data-testid={ `${strCategory}-category-filter` }
              type="button"
              key={ index }
              value={ strCategory }
            >
              {strCategory}
            </button>
          ),
        )}
        <button
          onClick={ () => setDrinkCategorySelected([]) }
          type="button"
          data-testid="All-category-filter"
        >
          All
        </button>
      </div>
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
