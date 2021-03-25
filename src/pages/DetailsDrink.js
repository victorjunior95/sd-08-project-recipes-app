import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DataDrinksContext } from '../context/ContextDrinks';
import './DetailsDrink.css';

function DetailsDrink() {
  const dataContext = useContext(DataDrinksContext);
  const { drinks } = dataContext;
  const history = useHistory();
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
      <button
        type="button"
        onClick={ () => history.push(`/bebidas/${Params.id}/in-progress`) }
      >
        Receita em progresso
      </button>
    </div>
  );
}

export default DetailsDrink;
