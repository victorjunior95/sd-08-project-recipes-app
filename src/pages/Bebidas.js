import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LariContext from '../context/Context';
import Card from '../components/Card';
import { categoryDrink } from '../services';

const Drinks = () => {
  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const { recipesFetch, drink } = useContext(LariContext);
  const [mapCards, setMapCards] = useState();
  const [category, setCategory] = useState([]);
  const [mapCategorys, setMapCategorys] = useState();
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  useEffect(() => {
    setFilteredDrinks(drink);
  }, [drink]);
  useEffect(() => {
    async function fetchFetch() {
      recipesFetch(false);
    }
    async function fetchCategory() {
      const result = await categoryDrink()
        .then((response) => setCategory(response));
      // console.log(categoryFood());
      console.log(result);
    }
    fetchCategory();
    // console.log(category);
    fetchFetch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // console.log(food);
    const mapDrinks = () => (
      setMapCards(
        filteredDrinks.map((beverage, index) => {
          if (index < MAX_RECIPES) {
            return (
              <Card
                key={ beverage.idDrink }
                id={ beverage.idDrink }
                index={ index }
                name={ beverage.strDrink }
                thumbnail={ beverage.strDrinkThumb }
                isFood={ false }
              />
            );
          }
          return '';
        }),
      )
    );
    mapDrinks();
  }, [filteredDrinks]);
  useEffect(() => {
    const filterCategories = (cat) => {
      console.log(cat);
      // console.log(drink);
      const result = drink.filter((beverage) => beverage.strCategory === cat);
      setFilteredDrinks(result);
    };
    // console.log(category);
    const mapCategory = () => (
      setMapCategorys(
        category.map((drinks, index) => {
          if (index < MAX_CATEGORY) {
            return (
              <button
                key={ index }
                type="button"
                data-testid={ `${drinks.strCategory}-category-filter` }
                onClick={ () => filterCategories(drinks.strCategory) }
              >
                {drinks.strCategory}
              </button>
            );
          }
          return '';
        }),
      )
    );
    mapCategory();
  }, [category, drink]);
  return (
    <div>
      <Header />
      <p>Bebidas</p>
      {mapCategorys}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setFilteredDrinks(drink) }
      >
        All
      </button>
      {mapCards}
      <Footer />
    </div>
  );
};

export default Drinks;
