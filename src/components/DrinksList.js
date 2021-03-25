import React, { useEffect, useState } from 'react';
import { requestDrinksList } from '../services/apiRequests';
import DrinksCard from './DrinksCard';

function DrinksList() {
  const [allDrinks, setAllDrinks] = useState([]);
  const MAX_INDEX = 11;
  useEffect(() => {
    async function requestDrinks() {
      const drinks = await requestDrinksList();
      setAllDrinks(drinks);
    }
    requestDrinks();
  }, []);
  return (
    <main>
      {
        allDrinks.map((drink, index) => {
          if (index <= MAX_INDEX) {
            return <DrinksCard key={ drink.idDrink } drink={ drink } index={ index } />;
          }
          return '';
        })
      }
    </main>
  );
}

export default DrinksList;
