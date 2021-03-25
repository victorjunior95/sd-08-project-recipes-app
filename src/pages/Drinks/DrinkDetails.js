import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useDrinkDetailsHook from '../hooks/useDrinkDetailsHook';

function DrinkDetails(props) {
  const { match: { params: { id } } } = props;
  const [
    setId,
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    ingredientsAndMeasuresList,
  ] = useDrinkDetailsHook();

  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
    <div className="card-container">
      <h2 data-testid="recipe-title">{ strDrink }</h2>
      <span data-testid="recipe-category">{ strCategory }</span>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
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
    </div>
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
