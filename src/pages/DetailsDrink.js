import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/Context';
import './DetailsDrink.css';

function DetailsDrink() {
  const dataContext = useContext(DataContext);
  const { drinks } = dataContext;
  const Params = useParams();
  const [drinkDetail, setDrinkDetail] = useState([]);
  useEffect(() => {
    const result = drinks.filter((drink) => drink.idDrink === Params.id);
    setDrinkDetail(result);
  }, [drinks, Params.id]);
  return (
    <div>
      <div className="container-card-drink-details">
        {drinkDetail.map((drink) => (
          <div className="card-drink-details" key={ drink.idDrink }>
            <img src={ drink.strDrinkThumb } alt="thumbnails-drink" />
            <h2>{drink.strDrink}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsDrink;
