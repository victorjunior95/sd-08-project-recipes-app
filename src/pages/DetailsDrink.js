import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataDrinksContext } from '../context/ContextDrinks';
import { getDrinkRecipesDetails } from '../services/getAPIs';

import './DetailsDrink.css';

function DetailsDrink() {
  const dataContext = useContext(DataDrinksContext);
  const { drinks } = dataContext;
  const Params = useParams();
  const [drinkDetail, setDrinkDetail] = useState([]);
  useEffect(() => {
    const result = drinks.filter((drink) => drink.idDrink === Params.id);
    const getIdDrink = result.map((item) => item.idDrink);
    async function fetchDetailsRecipe() {
      const getDetailsRecipe = await getDrinkRecipesDetails(getIdDrink);
      setDrinkDetail(getDetailsRecipe);
    }
    fetchDetailsRecipe();
  }, [drinks, Params.id]);

  // console.log(drinkDetail);
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
