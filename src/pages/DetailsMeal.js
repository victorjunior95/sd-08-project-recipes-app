import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/Context';
import './DetailsMeal.css';

function DetailsMeal() {
  const dataContext = useContext(DataContext);
  const { meals } = dataContext;
  const Params = useParams();
  const [mealDetail, setMealDetail] = useState([]);
  useEffect(() => {
    const result = meals.filter((meal) => meal.idMeal === Params.id);
    setMealDetail(result);
  }, [meals, Params.id]);
  return (
    <div>
      <div className="container-card-meal-details">
        {mealDetail.map((meal) => (
          <div className="card-meal-details" key={ meal.idMeal }>
            <img src={ meal.strMealThumb } alt="thumbnails-meal" />
            <h2>{meal.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsMeal;
