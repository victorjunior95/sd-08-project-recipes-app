import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import getResultFromAPI from '../api/getResultFromAPI';
import contextRecipes from '../context/Context';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Comidas = () => {
  const [meals, setMeals] = useState([]);
  const [targetButton, setTargetButton] = useState('');
  const history = useHistory();
  const BOOLEAN_FALSE = false;
  const { filter, mealsCategories, mainIngredient, setMain } = useContext(contextRecipes);

  useEffect(() => {
    async function getMealsFromAPI() {
      let mealsAPI = '';
      if (mainIngredient === '') {
        mealsAPI = await getResultFromAPI('/comidas');
      } else {
        mealsAPI = await getResultFromAPI('/comidas', 'Ingredients', mainIngredient);
        setMain('');
      }
      setMeals(mealsAPI);
    }
    getMealsFromAPI();
  }, []);

  useEffect(() => {
    setMeals(filter);
  }, [filter]);

  const filterByCategory = async (category, { target: { innerHTML } }) => {
    let filterdBtn;
    if (innerHTML !== targetButton) {
      filterdBtn = await getResultFromAPI('/comidas', 'filterBy', category);
      setTargetButton(innerHTML);
    } else {
      filterdBtn = await getResultFromAPI('/comidas');
      setTargetButton('');
    }
    setMeals(filterdBtn);
  };

  async function filterAll() {
    const filterAllApi = await getResultFromAPI('/comidas');
    setMeals(filterAllApi);
  }

  return (
    <>
      <Header title="Comidas" searchBtn={ BOOLEAN_FALSE } />
      <Button
        datatestid="All-category-filter"
        label="All"
        onClick={ filterAll }
      />
      {mealsCategories.map(({ strCategory: category }, index) => (
        <Button
          datatestid={ `${category}-category-filter` }
          label={ category }
          key={ index }
          onClick={ (event) => filterByCategory(category, event) }
        />
      ))}
      { meals.map((meal, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ meal.strMeal }>
          <input
            type="image"
            data-testid={ `${index}-card-img` }
            src={ meal.strMealThumb }
            alt="comida"
            width="100%"
            onClick={ () => history.push(`/comidas/${meal.idMeal}`) }
          />
          <p data-testid={ `${index}-card-name` }>{ meal.strMeal }</p>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Comidas;
