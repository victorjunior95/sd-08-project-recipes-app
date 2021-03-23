import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import fetchDrinksAPI from '../api/fetchDrinksAPI';
import contextRecipes from '../context/Context';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Bebidas = () => {
  const [drinks, setDrinks] = useState([]);
  const { filter, drinkApiButton } = useContext(contextRecipes);

  useEffect(() => {
    async function getDrinksFromAPI() {
      const drinksAPI = await fetchDrinksAPI();
      setDrinks(drinksAPI);
    }
    getDrinksFromAPI();
  }, []);

  useEffect(() => {
    setDrinks(filter);
  }, [filter]);

  return (
    <>
      <Header title="Bebidas" />
      { drinkApiButton.map(({ strCategory: category }, index) => (
        <Button
          datatestid={ `${category}-category-filter` }
          label={ category }
          key={ index }
        />
      ))}
      { drinks.map((drink, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ drink.strDrink }>
          <img
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt="bebida"
            width="100px"
          />
          <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Bebidas;
