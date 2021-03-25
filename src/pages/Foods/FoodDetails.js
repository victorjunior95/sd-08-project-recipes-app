import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useFoodDetailsHook from '../hooks/useFoodDetailsHook';

function FoodDetails(props) {
  const { match: { params: { id } } } = props;
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
    <div className="card-container">
      <h2 data-testid="recipe-title">{ strMeal }</h2>
      <span data-testid="recipe-category">{ strCategory }</span>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
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
