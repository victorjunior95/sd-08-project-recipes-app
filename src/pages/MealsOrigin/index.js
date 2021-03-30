import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MealCard from '../../components/MealCard';
import RecipesContext from '../../context/RecipesContext';

import { LIMIT_OF_CARDS, SEARCH_BY_NAME } from '../../common/defs';
import { getMeals } from '../../services';

export default function MealsOrigin() {
  const [inputArea, setInputArea] = useState('All');
  const { mealsOrigin, meals, setMeals } = useContext(RecipesContext);

  useEffect(() => {
    async function getMealsByArea() {
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputArea}`);
      const response = await data.json();
      setMeals(response.meals);
    }
    async function getAllMeals() {
      const data = await getMeals(SEARCH_BY_NAME, '');
      setMeals(data.meals);
    }
    if (inputArea === 'All') getAllMeals();
    else getMealsByArea();
  }, [inputArea, setMeals]);

  return (
    <div>
      <Header title="Explorar Origem" />
      <select
        data-testid="explore-by-area-dropdown"
        value={ inputArea }
        onChange={ (e) => setInputArea(e.target.value) }
      >
        <option value="All" data-testid="All-option">All</option>
        {mealsOrigin.map((area, index) => (
          <option
            key={ index }
            value={ area.strArea }
            data-testid={ `${area.strArea}-option` }
          >
            {area.strArea}
          </option>
        ))}
      </select>
      <br />
      {meals.map((meal, index) => {
        if (index < LIMIT_OF_CARDS) {
          return <MealCard key={ index } meal={ meal } index={ index } />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
}
