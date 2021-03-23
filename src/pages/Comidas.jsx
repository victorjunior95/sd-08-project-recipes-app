import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import getResultFromAPI from '../api/getResultFromAPI';
import contextRecipes from '../context/Context';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Comidas = () => {
  const [meals, setMeals] = useState([]);
  // const [saveMeals, setSaveMeals] = useState([]);
  // const [fiterByAllCategory, setfiterByAllCategory] = useState([]);

  const { filter, mealsCategories } = useContext(contextRecipes);

  useEffect(() => {
    async function getMealsFromAPI() {
      const mealsAPI = await getResultFromAPI('/comidas');
      // setSaveMeals(mealsAPI);
      setMeals(mealsAPI);
    }
    getMealsFromAPI();
  }, []);

  useEffect(() => {
    setMeals(filter);
  }, [filter]);

  const filterByCategory = async (category) => {
    const filterdBtn = await getResultFromAPI('/comidas', 'filterBy', category);
    setMeals(filterdBtn);
  };

  return (
    <>
      <Header title="Comidas" />
      {mealsCategories.map(({ strCategory: category }, index) => (
        <Button
          datatestid={ `${category}-category-filter` }
          label={ category }
          key={ index }
          onClick={ () => filterByCategory(category) }
        />
      ))}
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
      <Footer />
    </>
  );
};

export default Comidas;
