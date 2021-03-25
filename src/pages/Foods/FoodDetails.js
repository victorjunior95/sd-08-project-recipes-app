import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useFoodDetailsHook from '../hooks/useFoodDetailsHook';

function FoodDetails(props) {
  const { match: { params: { id } } } = props;
  console.log('id na fooddetails ', id);
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
    <div>
      <h2 data-testid="recipe-title">{ strMeal }</h2>
      <span data-testid="recipe-category">{ strCategory }</span>
      <img data-testid="recipe-photo" src={ strMealThumb } alt="Recipe pic" />
      <iframe
        width="560"
        height="315"
        src={ strYoutube }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;
            autoplay; clipboard-write;
            encrypted-media;
            gyroscope; picture-in-picture"
        allowFullScreen
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
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
    </div>
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
