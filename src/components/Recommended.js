import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import Context from '../context/Context';

function Recommended({ recipeType }) {
  const { recommendations } = useContext(Context);

  const SIX = 6;

  return (
    <section>
      <h5>Recomendadas</h5>
      { recipeType === 'Drink' ? (
        recommendations[0].meals && recommendations[0].meals.map((item, index) => (
          index < SIX ? (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <img
                alt="Recipe thumbnail"
                src={ item.strMealThumb }
                height="100"
              />
              <h6>
                { item.strCategory }
              </h6>
              <h5 data-testid={ `${index}-recomendation-title` }>
                { item.strMeal }
              </h5>
            </div>)
            : null)))
        : (
          recommendations[0].drinks && recommendations[0].drinks.map((item, index) => (
            index < SIX ? (
              <div key={ index } data-testid={ `${index}-recomendation-card` }>
                <img
                  alt="Recipe thumbnail"
                  src={ item.strDrinkThumb }
                  height="100"
                />
                <h6>
                  { item.strCategory }
                </h6>
                <h5 data-testid={ `${index}-recomendation-title` }>
                  { item.strDrink }
                </h5>
              </div>)
              : null)))}
    </section>
  );
}

Recommended.propTypes = {
  recipeType: PropTypes.string,
}.isRequired;

export default Recommended;
