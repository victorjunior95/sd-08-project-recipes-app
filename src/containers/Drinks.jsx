import React, { useEffect, useState, useContext } from 'react';
// import { Redirect } from 'react-router';
import components from '../components/index';
import MainDrinksCard from '../components/MainDrinksCard';
import api from '../services';
import { MAIN_FOOD_CARD_LENGTH_12, CATEGORIES_LENGTH_5 } from '../constants';
import RecipesContext from '../core/RecipesContext';

function Drinks() {
  const {
    isLoading,
    drinkData,
    byIngredient,
    ingredientName } = useContext(RecipesContext);

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
    } else if (byIngredient && ingredientName) {
      api.searchByDrinkIngredient(ingredientName)
        .then((response) => response.json())
        .then((result) => setDataDrinks(result.drinks));
    } else {
      api.fetchDrinks()
        .then((response) => response.json())
        .then((result) => setDataDrinks(result.drinks));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinkCategorySelected, selectedDrink]);

  return (
    <div>
      <components.Header title="Bebidas" />
      {isLoading ? 'Loading...' : null}
      <div className="drinks-buttons-container">
        <button
          className="btn btn-primary"
          style={ { marginTop: 5,
            marginBottom: 5,
            width: 163 } }
          onClick={ () => {
            setDrinkCategorySelected([]);
            setSelectedDrink(false);
          } }
          type="button"
          data-testid="All-category-filter"
        >
          All
        </button>
        {dataDrinksCategories.slice(0, CATEGORIES_LENGTH_5).map(
          ({ strCategory }, index) => (
            <button
              className="btn btn-primary"
              style={ { marginTop: 5,
                marginBottom: 5,
                width: 163 } }
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
      </div>
      <div className="home-container">
        {drinkData.length && !selectedDrink
          ? drinkData.slice(0, MAIN_FOOD_CARD_LENGTH_12).map((curr, index) => (
            <MainDrinksCard
              key={ index }
              dataDrinks={ curr }
              index={ index }
              id={ curr.idDrink }
            />
          ))

          : dataDrinks.slice(0, MAIN_FOOD_CARD_LENGTH_12).map((drink, index) => (
            <MainDrinksCard
              key={ index }
              dataDrinks={ drink }
              index={ index }
              id={ drink.idDrink }
            />
          ))}
        {/* { drinkData.length && !selectedDrink && drinkData.length === 1
          ? <Redirect to={ `/bebidas/${drinkData[0].idDrink}` } /> : null } */}
        <components.Footer />
      </div>
    </div>
  );
}

export default Drinks;
