import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import fetchDrinksAPI from '../api/fetchDrinksAPI';

const Bebidas = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getDrinksFromAPI() {
      const drinksAPI = await fetchDrinksAPI();
      setDrinks(drinksAPI);
    }
    getDrinksFromAPI();
  }, []);

  console.log(drinks);

  return (
    <>
      <Header title="Bebidas" />
      { drinks.map((drink) => (
        <div key={ drink.strDrink }>{ drink.strDrink }</div>
      ))}
    </>
  );
};

export default Bebidas;
