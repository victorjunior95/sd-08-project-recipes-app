import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LariContext from '../context/Context';
import Card from '../components/Card';
import { categoryFood, seachFoodByCategory } from '../services';

const Comidas = () => {
  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const { recipesFetch, food } = useContext(LariContext);
  const [mapCards, setMapCards] = useState();
  const [category, setCategory] = useState([]);
  const [mapCategorys, setMapCategorys] = useState();
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');
  useEffect(() => {
    setFilteredFoods(food);
  }, [food]);
  useEffect(() => {
    async function fetchFetch() {
      recipesFetch(true);
    }
    async function fetchCategory() {
      const result = await categoryFood()
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
    const mapFoods = () => (
      setMapCards(
        filteredFoods.map((meal, index) => {
          if (index < MAX_RECIPES) {
            return (
              <Card
                key={ meal.idMeal }
                id={ meal.idMeal }
                index={ index }
                name={ meal.strMeal }
                thumbnail={ meal.strMealThumb }
                isFood
              />
            );
          }
          return '';
        }),
      )
    );
    mapFoods();
  }, [filteredFoods]);
  useEffect(() => {
    // const filterCategories = (cat) => {
    //   console.log(cat);
    //   const result = food.filter((meal) => (meal.strCategory === cat));
    //   setFilteredFoods(result);
    // };
    const fetchFoodByCategory = async (cat) => {
      // console.log(` ${currentCategory}  <=>  ${cat} `);
      if (currentCategory === cat) {
        setFilteredFoods(food);
        setCurrentCategory('All');
        // console.log(` ${currentCategory}`);
      } else {
        const result = await seachFoodByCategory(cat);
        setFilteredFoods(result);
        setCurrentCategory(cat);
      }
    };
    // console.log(category);
    const mapCategory = () => (
      setMapCategorys(
        category.map((meal, index) => {
          if (index < MAX_CATEGORY) {
            return (
              <label htmlFor={ meal.strCategory }>
                <input
                  key={ index }
                  type="radio"
                  data-testid={ `${meal.strCategory}-category-filter` }
                  onClick={ () => fetchFoodByCategory(meal.strCategory) }
                  checked={ currentCategory === meal.strCategory }
                />
                {meal.strCategory}
              </label>
            );
          }
          return '';
        }),
      )
    );
    mapCategory();
  }, [category, food, currentCategory]);
  return (
    <div>
      <Header />
      <p>Comidas</p>
      {mapCategorys}
      <label htmlFor="All">
        All
        <input
          type="radio"
          data-testid="All-category-filter"
          onClick={ () => setFilteredFoods(food) }
          checked={ currentCategory === 'All' }
        />
      </label>
      {mapCards}
      <Footer />
    </div>
  );
};

export default Comidas;
