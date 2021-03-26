import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import Loading from '../../components/Loading';

function FoodDetails(props) {
  const [iddMeals, setIddMeals] = useState({ meals: [] });

  const { match: { params: receitaID } } = props;
  const numberMeals = Object.values(receitaID);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Number(numberMeals)}`)
      .then((response) => response.json())
      .then((data) => setIddMeals(data));
  }, []);

  return (
    //
    <Container>

      {iddMeals.meals.map((item) => (
        <div key={ item.idMeal }>
          <img
            src={ item.strMealThumb }
            alt={ item.trArea }
            data-testid="recipe-photo"
          />
          <h1 data-testid="recipe-title">
            {item.strMeal}
          </h1>
          <button data-testid="share-btn" type="button"> compartilhar </button>
          <button data-testid="favorite-btn" type="button"> Favorito </button>
          <h2 data-testid="recipe-category">{item.strCategory}</h2>

        </div>))}

    </Container>
  );
}

export default FoodDetails;
