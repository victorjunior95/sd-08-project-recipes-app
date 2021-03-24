import React, { useContext, useState, useEffect } from 'react';
import RecipesContext from '../core/RecipesContext';
import components from '../components/index';

import api from '../services/index';
import { MAIN_FOOD_CARD_LENGTH_12, CATEGORIES_LENGTH_5 } from '../constants';
import MainFoodsCard from '../components/MainFoodsCard';
//  import loading from '../assets/oval.svg';
// <img className="loading-img" src={ loading } alt="loading icon" />

function Home() {
  const { isLoading, mealData } = useContext(RecipesContext);
  const [dataFoods, setDataFoods] = useState([]);
  const [dataFoodsCategories, setDataFoodCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState([]);
  const [selected, setSelected] = useState(false);

  function handleClick({ target }) {
    setCategorySelected(target.value);
    if (categorySelected !== target.value && categorySelected.length > 0) {
      setSelected(selected);
    } else {
      setSelected(!selected);
    }
  }

  useEffect(() => {
    api.fetchCategoriesFood()
      .then((response) => response.json())
      .then((result) => setDataFoodCategories(result.meals));
    if (categorySelected.length && selected) {
      api.fetchFoodByCategory(categorySelected)
        .then((response) => response.json())
        .then((result) => setDataFoods(result.meals));
    } else {
      api.fetchMeals()
        .then((response) => response.json())
        .then((result) => setDataFoods(result.meals));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected, selected]);
  console.log(categorySelected, selected);
  return (
    <div>
      <components.Header title="Comidas" />
      {isLoading ? 'Loading...' : null}
      <div>
        {dataFoodsCategories.slice(0, CATEGORIES_LENGTH_5).map(
          ({ strCategory }, index) => (
            <button
              onClick={ handleClick }
              value={ strCategory }
              data-testid={ `${strCategory}-category-filter` }
              type="button"
              key={ index }
            >
              {strCategory}
            </button>
          ),
        )}
        <button
          onClick={ () => {
            setCategorySelected([]);
            setSelected(false);
          } }
          type="button"
          data-testid="All-category-filter"
        >
          All
        </button>
      </div>
      <div className="home-container">
        {mealData.length && !selected
          ? mealData.slice(0, MAIN_FOOD_CARD_LENGTH_12).map((curr, index) => (
            <MainFoodsCard
              key={ index }
              dataFoods={ curr }
              index={ index }
              id={ curr }
            />
          ))
          : dataFoods.slice(0, MAIN_FOOD_CARD_LENGTH_12).map((food, index) => (
            <MainFoodsCard
              key={ index }
              dataFoods={ food }
              index={ index }
              id={ food.idMeal }
            />
          ))}
        <components.Footer />
      </div>
    </div>
  );
}

export default Home;
