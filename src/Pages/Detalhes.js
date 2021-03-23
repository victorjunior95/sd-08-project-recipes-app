import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import '../styles/Card.css';
// import shareIcon from '../images/shareIcon.svg'

function Detalhes() {
  const { setShouldRedirect } = useContext(RecipeContext);
  const [objDetail, setObjDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const requestByID = async () => {
    const value = history.location.pathname;
    let response = [];
    const id = value.split('s/')[1];
    if (value.includes('bebidas')) {
      response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseJson = await response.json();
      await setObjDetail(responseJson.drinks);
    }
    if (value.includes('comidas')) {
      response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseJson = await response.json();
      await setObjDetail(responseJson.meals);
    }

    // setTimeout(() => {
    // setLoading(false);
    // }, 2000)
    setLoading(false);
  };

  useEffect(() => {
    requestByID();
    setShouldRedirect(false);
  }, []);

  const renderDrink = () => (
    <div>
      <h1 data-testid="recipe-title">{objDetail[0].strDrink}</h1>
      <img
        data-testid="recipe-photo"
        className="food-image"
        src={ objDetail[0].strDrinkThumb }
        alt={ objDetail[0].strDrink }
      />
      {/* <img data-testid="share-btn" />
      <input type="image" src={ shareIcon } /> */}
    </div>
  );

  const renderFood = () => (
    <div>
      <h1 data-testid="recipe-title">{objDetail[0].strMeal}</h1>
      <img
        data-testid="recipe-photo"
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
      {loading ? <p>Carregando</p> : render()}
    </div>
  );
}

export default Detalhes;
