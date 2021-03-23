import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import '../styles/Card.css';

function Detalhes() {
  const { setShouldRedirect } = useContext(RecipeContext);
  const [objDetail, setObjDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const requestByID = async () => {
    const value = history.location.pathname;
    let response = [];
    const id = value.split('s/')[1];
    if (value.includes('comidas')) {
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseJson = await response.json();
      setObjDetail(responseJson.meals);
    }
    if (value.includes('bebidas')) {
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseJson = await response.json();
      setObjDetail(responseJson.drinks);
    }
    setLoading(false);
  };

  useEffect(() => {
    requestByID();
    setShouldRedirect(false);
  }, []);

  const renderDrink = () => (
    <div>
      {console.log(objDetail[0])}
      <h1>{objDetail[0].strDrink}</h1>
      <img
        className="food-image"
        src={ objDetail[0].strDrinkThumb }
        alt={ objDetail[0].strDrink }
      />
    </div>
  );

  const renderFood = () => (
    <div>
      <h1>{objDetail[0].strMeal}</h1>
      <img
        className="food-image"
        src={ objDetail[0].strMealThumb }
        alt={ objDetail[0].strMeal }
      />
    </div>

  );

  const render = () => {
    const value = history.location.pathname;
    if (value.includes('comidas')) {
      return renderFood();
    }
    if (value.includes('bebidas')) {
      return renderDrink();
    }
  };

  return (
    <div>
      {console.log(objDetail[0])}
      {loading ? <p>Carregando</p> : render()}
    </div>
  );
}

export default Detalhes;
