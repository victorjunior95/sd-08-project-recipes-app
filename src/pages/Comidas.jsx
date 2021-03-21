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
      { meals.map((meal) => (
        <div key={ meal.strMeal }>{ meal.strMeal }</div>
      ))}
    </>
  );
};

export default Comidas;
