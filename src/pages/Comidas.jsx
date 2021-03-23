import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchMealsAPI, fetchFilteredMealsAPI } from '../api/fetchMealsAPI';
import contextRecipes from '../context/Context';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Comidas = () => {
  const TWELVE_MEALS = 12;
  const [meals, setMeals] = useState([]);
  const [saveMeals, setSaveMeals] = useState([]);
  // const [fiterByAllCategory, setfiterByAllCategory] = useState([]);
  const { filter, buttonFilter } = useContext(contextRecipes);
  console.log(fetchFilteredMealsAPI);

  useEffect(() => {
    async function getMealsFromAPI() {
      const mealsAPI = await fetchMealsAPI();
      setSaveMeals(mealsAPI);
      setMeals(mealsAPI);
    }
    getMealsFromAPI();
  }, []);

  useEffect(() => {
    setMeals(filter);
  }, [filter]);

  const filteredName = (category) => {
    console.log(category);
    const filterdBtn = saveMeals.filter((meal) => (
      meal.strCategory === category));
    setMeals(filterdBtn);
  };

  return (
    <>
      <Header title="Comidas" />
      {buttonFilter.map((category, index) => (
        <Button
          datatestid={ `${category.strCategory}-category-filter` }
          label={ category.strCategory }
          key={ index }
          onClick={ () => filteredName(category.strCategory) }
        />
      ))}
      { meals.slice(0, TWELVE_MEALS).map((meal, index) => (
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
      <Footer />
    </>
  );
};

export default Comidas;
