import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import LariContext from '../context/Context';
import Card from '../components/Card';
import { categoryDrink, seachDrinkByCategory } from '../services';

const Drinks = () => {
  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const { recipesFetch, drink } = useContext(LariContext);
  const [mapCards, setMapCards] = useState();
  const [category, setCategory] = useState([]);
  const [mapCategorys, setMapCategorys] = useState();
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');
  useEffect(() => {
    setFilteredDrinks(drink);
    // console.log(drink);
  }, [drink]);
  useEffect(() => {
    async function fetchFetch() {
      recipesFetch(false);
    }
    async function fetchCategory() {
      const result = await categoryDrink()
        .then((response) => setCategory(response));
      // console.log(categoryFood());
      // console.log(result);
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
    // const filterCategories = (cat) => {
    //   console.log(cat);
    //   // console.log(drink);
    //   const result = drink.filter((beverage) => beverage.strCategory === cat);
    //   setFilteredDrinks(result);
    // };
    const fetchDrinkByCategory = async (cat) => {
      // console.log(` ${currentCategory}  <=>  ${cat} `);
      if (currentCategory === cat) {
        setFilteredDrinks(drink);
        setCurrentCategory('All');
        // console.log(` ${currentCategory}`);
      } else {
        const result = await seachDrinkByCategory(cat);
        setFilteredDrinks(result);
        setCurrentCategory(cat);
      }
    };
    // console.log(category);
    const mapCategory = () => (
      setMapCategorys(
        category.map((drinks, index) => {
          if (index < MAX_CATEGORY) {
            return (
              <label key={ index } htmlFor={ drinks.strCategory }>
                {drinks.strCategory}
                <input
                  type="radio"
                  data-testid={ `${drinks.strCategory}-category-filter` }
                  onClick={ () => fetchDrinkByCategory(drinks.strCategory) }
                  checked={ currentCategory === drinks.strCategory }
                />
              </label>
            );
          }
          return '';
        }),
      )
    );
    mapCategory();
  }, [category, drink, currentCategory]);
  return (
    <div>
      <Header title="Bebidas" />
      {mapCategorys}
      <label htmlFor="All">
        All
        <input
          type="radio"
          data-testid="All-category-filter"
          onClick={ () => setFilteredDrinks(drink) }
          checked={ currentCategory === 'All' }
        />
      </label>
      {mapCards}
      <Footer />
    </div>
  );
};

export default Drinks;
