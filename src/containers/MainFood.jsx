import React, { useContext, useState, useEffect } from 'react';
import components from '../components/index';
import RecipiesContext from '../core/RecipiesContext';
import api from '../services/index';
import { MAIN_FOOD_CARD_LENGTH_12 } from '../constants';

function Home() {
  const { data } = useContext(RecipiesContext);
  const [dataFoods, setDataFoods] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);

  useEffect(() => {
    api.fetchDrinks()
      .then((response) => response.json())
      .then((result) => setDataDrinks(result.drinks.slice(0, MAIN_FOOD_CARD_LENGTH_12)));
    setDataFoods(data.slice(0, MAIN_FOOD_CARD_LENGTH_12));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(dataFoods, dataDrinks);
  return (
    <div className="home-container">
      <components.Header title="Comidas" />
      <h2>Comidas...</h2>
      <components.Footer />
    </div>
  );
}

export default Home;
