import React, { useState, useEffect } from 'react';
import { requestRecipesList } from '../services/apiRequests';

function RecommendedMeals() {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const MAX_LENGTH = 5;

  useEffect(() => {
    async function requestMeals() {
      const recipes = await requestRecipesList();
      setRecommended(recipes);
      setLoading(false);
    }
    requestMeals();
  }, []);

  if (loading) {
    return (
      <p>loading</p>
    );
  }
  return (
    <div className="scroll-menu">
      {
        recommended.map((meal, index) => {
          if (index <= MAX_LENGTH) {
            return (
              <h1 data-testid={ `${index}-recomendation-card` } key={ index }>
                {meal.strMeal}
              </h1>
            );
          }
          return '';
        })
      }
    </div>
  );
}

export default RecommendedMeals;
