import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import getResultFromAPI from '../api/getResultFromAPI';
// import FoodCard from './FoodCard';
import RecomendationCard from './RecomendationCard';

function Recomendations() {
  const SIX_RECOMMENDATIONS = 6;
  const { pathname } = useLocation();
  const [recomended, setRecomended] = useState([]);

  useEffect(() => {
    async function getFood() {
      let drinkOrFood = '';
      if (pathname.includes('/comidas')) {
        drinkOrFood = '/bebidas';
      } else {
        drinkOrFood = '/comidas';
      }
      const foods = await getResultFromAPI(drinkOrFood);
      setRecomended(foods.slice(0, SIX_RECOMMENDATIONS));
    }
    getFood();
  }, []);

  return (
    <ul className="recommendationList">
      { recomended.map((food, index) => (
        <li
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          <RecomendationCard index={ index } food={ food } />
        </li>
      ))}
    </ul>
  );
}

export default Recomendations;
