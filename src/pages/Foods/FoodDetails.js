import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFoodDetailsHook from '../hooks/useFoodDetailsHook';
import { DrinkCtx } from '../../context/ContextDrink';
import CarouselCard from '../../components/Card/CarouselCard';

function FoodDetails(props) {
  const { match: { params: { id } } } = props;
  const { drinkApi: { drinks } } = useContext(DrinkCtx);
  const STOP_INDEX = 5;
  const [
    setId,
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strYoutube,
    ingredientsAndMeasuresList,
  ] = useFoodDetailsHook();

  useEffect(() => {
    setId(id);
  }, []);

  return (
    <>
      <div className="recipe-container">
        <h2 data-testid="recipe-title">{ strMeal }</h2>
        <span data-testid="recipe-category">{ strCategory }</span>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <img
          className="detail-image"
          data-testid="recipe-photo"
          src={ strMealThumb }
          alt="Recipe pic"
        />
        <div>
          <iframe
            data-testid="video"
            width="280"
            height="157"
            src={ strYoutube }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;
              autoplay; clipboard-write;
              encrypted-media;
              gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
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
      </div>
      <div className="carousel">
        {drinks && drinks
          .filter((drink, index) => index <= STOP_INDEX)
          .map((item, index) => (
            <CarouselCard
              key={ item.idDrink }
              id={ item.idDrink }
              name={ item.strDrink }
              img={ item.strDrinkThumb }
              index={ index }
            />

          ))}
        <button
          className="start-btn"
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar
        </button>
      </div>
    </>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodDetails;
