import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LariContext from '../context/Context';
import Card from '../components/Card';

const Drinks = () => {
  const MAX_RECIPES = 12;
  const { recipesFetch, drink } = useContext(LariContext);
  const [mapCards, setMapCards] = useState();
  useEffect(() => {
    async function fetchFetch() {
      recipesFetch(false);
    }
    fetchFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // console.log(food);
    const mapDrinks = () => (
      setMapCards(
        drink.map((beverage, index) => {
          if (index < MAX_RECIPES) {
            return (
              <Card
                key={ beverage.idDrink }
                index={ index }
                name={ beverage.strDrink }
                thumbnail={ beverage.strDrinkThumb }
                data-testid={ `${index}-recipe-card ` }
              />
            );
          }
          return '';
        }),
      )
    );
    mapDrinks();
  }, [drink]);
  return (
    <div>
      <Header />
      <p>Comidas</p>
      {mapCards}
      <Footer />
    </div>
  );
};

export default Drinks;
