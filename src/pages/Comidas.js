import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LariContext from '../context/Context';
import Card from '../components/Card';
import { categoryFood } from '../services';

const Comidas = () => {
  const MAX_RECIPES = 12;
  const MAX_CATEGORY = 5;
  const { recipesFetch, food } = useContext(LariContext);
  const [mapCards, setMapCards] = useState();
  const [category, setCategory] = useState([]);
  const [mapCategorys, setMapCategorys] = useState();
  const [filteredFoods, setFilteredFoods] = useState([]);
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
    const filterCategories = (cat) => {
      console.log(cat);
      const result = food.filter((meal) => (meal.strCategory === cat));
      setFilteredFoods(result);
    };
    // console.log(category);
    const mapCategory = () => (
      setMapCategorys(
        category.map((meal, index) => {
          if (index < MAX_CATEGORY) {
            return (
              <button
                key={ index }
                type="button"
                data-testid={ `${meal.strCategory}-category-filter` }
                onClick={ () => filterCategories(meal.strCategory) }
              >
                {meal.strCategory}
              </button>
            );
          }
          return '';
        }),
      )
    );
    mapCategory();
  }, [category, food]);
  return (
    <div>
      <Header />
      <p>Comidas</p>
      {mapCategorys}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setFilteredFoods(food) }
      >
        All
      </button>
      {mapCards}
      <Footer />
    </div>
  );
};

export default Comidas;
