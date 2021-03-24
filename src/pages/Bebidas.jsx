import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import getResultFromAPI from '../api/getResultFromAPI';
import contextRecipes from '../context/Context';
import Button from '../components/Button';
import Footer from '../components/Footer';
import FoodCard from '../components/FoodCard';

const Bebidas = () => {
  const [drinks, setDrinks] = useState([]);
  const [targetButton, setTargetButton] = useState('');
  const { filter, drinksCategories } = useContext(contextRecipes);

  useEffect(() => {
    async function getDrinksFromAPI() {
      const drinksAPI = await getResultFromAPI('/bebidas');
      setDrinks(drinksAPI);
    }
    getDrinksFromAPI();
  }, []);

  useEffect(() => {
    setDrinks(filter);
  }, [filter]);

  const filterByCategory = async (category, { target: { innerHTML } }) => {
    let filterdBtn;
    if (innerHTML !== targetButton) {
      filterdBtn = await getResultFromAPI('/bebidas', 'filterBy', category);
      setTargetButton(innerHTML);
    } else {
      filterdBtn = await getResultFromAPI('/bebidas');
      setTargetButton('');
    }
    setDrinks(filterdBtn);
  };

  return (
    <>
      <Header title="Bebidas" />
      { drinksCategories.map(({ strCategory: category }, index) => (
        <Button
          datatestid={ `${category}-category-filter` }
          label={ category }
          key={ index }
          onClick={ (event) => filterByCategory(category, event) }
        />
      ))}
      { drinks.map((drink, index) => (
        <FoodCard index={ index } food={ drink } key={ index } />
      )) }
      <Footer />
    </>
  );
};

export default Bebidas;
