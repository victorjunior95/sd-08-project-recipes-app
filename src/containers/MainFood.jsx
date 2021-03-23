import React, { useState, useEffect } from 'react';
import components from '../components/index';

import api from '../services/index';
import { MAIN_FOOD_CARD_LENGTH_12, CATEGORIES_LENGTH_5 } from '../constants';
import MainFoodsCard from '../components/MainFoodsCard';

function Home() {
  const [dataFoods, setDataFoods] = useState([]);
  const [dataFoodsCategories, setDataFoodCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState([]);

  useEffect(() => {
    api.fetchCategoriesFood()
      .then((response) => response.json())
      .then((result) => setDataFoodCategories(result.meals));
    if (categorySelected.length > 0) {
      api.fetchFoodByCategory(categorySelected)
        .then((response) => response.json())
        .then((result) => setDataFoods(result.meals));
    } else {
      api.fetchMeals()
        .then((response) => response.json())
        .then((result) => setDataFoods(result.meals));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);

  return (
    <div>
      <components.Header title="Comidas" />
      {dataFoodsCategories.slice(0, CATEGORIES_LENGTH_5).map(({ strCategory }, index) => (
        <button
          onClick={ ({ target }) => setCategorySelected(target.value) }
          value={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          key={ index }
        >
          {strCategory}
        </button>
      ))}
      <div className="home-container">
        {dataFoods.slice(0, MAIN_FOOD_CARD_LENGTH_12).map((food, index) => (
          <MainFoodsCard
            key={ index }
            dataFoods={ food }
            index={ index }
          />
        ))}
        <components.Footer />
      </div>
    </div>
  );
}

export default Home;
