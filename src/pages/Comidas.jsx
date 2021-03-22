import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import fetchMealsAPI from '../api/fetchMealsAPI';
import contextRecipes from '../context/Context';

const Comidas = () => {
  const [meals, setMeals] = useState([]);
  const { filter } = useContext(contextRecipes);

  useEffect(() => {
    async function getMealsFromAPI() {
      const mealsAPI = await fetchMealsAPI();
      setMeals(mealsAPI);
    }
    getMealsFromAPI();
  }, []);

  useEffect(() => {
    setMeals(filter);
  }, [filter]);

  return (
    <>
      <Header title="Comidas" />
      { meals.map((meal, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ meal.strMeal }>
          <img
            data-testid={ `${index}-card-img` }
            src={ meal.strMealThumb }
            alt="comida"
            width="100px"
          />
          <p data-testid={ `${index}-card-name` }>{ meal.strMeal }</p>
        </div>
      ))}
    </>
  );
};

export default Comidas;
