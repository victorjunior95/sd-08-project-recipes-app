import React, { useEffect, useState } from 'react';
// import RecipiesContext from '../core/RecipiesContext';
import { fetchMealById } from '../services/mealsAPI';

const FoodDetails = () => {
  // const { data } = useContext(RecipiesContext);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMealById('52771')
      .then((response) => response.json()).then((result) => setFood(result));
  }, []);

  useEffect(() => {
    if (food !== []) {
      return setLoading(false);
    }
    return setLoading(true);
  }, [food, setLoading]);

  return (
    <div>
      {loading
        ? (
          <div>Loading</div>
        )
        : (
          <div>
            <div>
              <img src="data" alt="data" data-testid="recipe-photo" />
            </div>
            <div>
              <h3 data-testid="recipe-title">Title</h3>
              <button type="submit" data-testid="share-btn">Share</button>
              <button type="submit" data-testid="favorite-btn">Favorite</button>
            </div>
            <p data-testid="recipe-category">Category</p>
            <h5>Ingredients</h5>
            <ul>
              <li data-testid="0-ingredient-name-and-measure">ingrediente 1</li>
            </ul>
            <h5>Instructions</h5>
            <p data-testid="instructions">Mix all ingredientes</p>
            {/* {data.name === 'food'
        && ( */}
            <div>
              <iframe src="data" frameBorder="0" title="data" data-testid="video" />
            </div>
            {/* )} */}
            <h5>Recomendadas</h5>
            <div>
              <div data-testid="0-recomendation-card">
                <img src="data" alt="data" />
                <p>type</p>
                <h6>name</h6>
              </div>
            </div>
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
          </div>
        )}
    </div>
  );
};

export default FoodDetails;
