import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import useDrinkDetailsHook from '../hooks/useDrinkDetailsHook';
import { FoodCtx } from '../../context/ContextFood';
import CarouselCard from '../../components/Card/CarouselCard';
import shareIcon from '../../images/shareIcon.svg';
import favIcon from '../../images/whiteHeartIcon.svg';

function DrinkDetails(props) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { match: { params: { id } } } = props;
  const { foodApi: { meals } } = useContext(FoodCtx);
  const STOP_INDEX = 5;
  const [
    setId,
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    ingredientsAndMeasuresList,
    strAlcoholic,
  ] = useDrinkDetailsHook();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }, []);

  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
    <>
      { shouldRedirect && <Redirect to={ `/bebidas/${id}/in-progress` } /> }
      <div className="recipe-container">
        <h2 data-testid="recipe-title">{ strDrink }</h2>
        <span data-testid="recipe-category">
          { strCategory }
          <span>{ strAlcoholic }</span>
        </span>
        <div className="icons">
          <img src={ shareIcon } alt="Compartilhar" data-testid="share-btn" />
          <img src={ favIcon } alt="Compartilhar" data-testid="favorite-btn" />
        </div>
        <img
          className="detail-image"
          data-testid="recipe-photo"
          src={ strDrinkThumb }
          alt="Recipe pic"
        />
        <ul>
          { ingredientsAndMeasuresList
            .filter((ingr) => ingr !== '' && ingr !== null)
            .map(
              (ing, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {ing}
                </li>),
            ) }
        </ul>
        <p data-testid="instructions">{ strInstructions }</p>
        {meals && meals
          .filter((meal, index) => index <= STOP_INDEX)
          .map((item, index) => (
            <CarouselCard
              key={ item.idMeal }
              id={ item.idMeal }
              name={ item.strMeal }
              img={ item.strMealThumb }
              index={ index }
            />

          ))}
        <button
          className="start-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => setShouldRedirect(true) }
        >
          Iniciar
        </button>
      </div>
    </>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DrinkDetails;
