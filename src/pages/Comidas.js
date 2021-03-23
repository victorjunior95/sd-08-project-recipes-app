import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LariContext from '../context/Context';
import Card from '../components/Card';

const Comidas = () => {
  const MAX_RECIPES = 12;
  const { recipesFetch, food } = useContext(LariContext);
  const [mapCards, setMapCards] = useState();
  useEffect(() => {
    async function fetchFetch() {
      recipesFetch(true);
    }
    fetchFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // console.log(food);
    const mapFoods = () => (
      setMapCards(
        food.map((meal, index) => {
          if (index < MAX_RECIPES) {
            return (
              <Card
                key={ meal.idMeal }
                index={ index }
                name={ meal.strMeal }
                thumbnail={ meal.strMealThumb }
              />
            );
          }
          return '';
        }),
      )
    );
    mapFoods();
  }, [food]);
  // console.log(food);
  return (

    <div>
      <Header />
      <p>Comidas</p>
      {mapCards}
      <Footer />
    </div>
  );
};

export default Comidas;
