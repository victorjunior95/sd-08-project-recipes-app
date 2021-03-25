import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import Context from '../context/Context';

function Ingredients({ status }) {
  const { recipeDetails } = useContext(Context);

  const details = Object.values(recipeDetails[0])[0];
  const recipe = Object.values(recipeDetails[0])[0][0];

  return (
    <section>
      <h5>Ingredients</h5>
      {
        status === 'ongoing' ? (
          <fieldset>
            {
              Object.keys(details[0]).map((item, index) => (
                recipe[`strIngredient${index + 1}`] !== ''
              && recipe[`strIngredient${index + 1}`]
                  ? (
                    <div>
                      <label htmlFor={ index }>
                        { `${recipe[`strIngredient${index + 1}`]} - 
                    ${recipe[`strMeasure${index + 1}`]}` }
                      </label>
                      <input
                        type="checkbox"
                        key={ index }
                        id={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      />
                    </div>
                  )
                  : null
              ))
            }
            : null
          </fieldset>
        ) : (
          <ul>
            {
              Object.keys(details[0]).map((item, index) => (
                recipe[`strIngredient${index + 1}`] !== ''
              && recipe[`strIngredient${index + 1}`]
                  ? (
                    <li
                      key={ index }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      { `${recipe[`strIngredient${index + 1}`]} - 
                    ${recipe[`strMeasure${index + 1}`]}` }
                    </li>
                  )
                  : null
              ))
            }
          </ul>
        )
      }
      <h5>Instructions</h5>
      <p data-testid="instructions">
        { recipe.strInstructions }
      </p>

    </section>
  );
}

Ingredients.propTypes = {
  status: PropTypes.string,
}.isRequired;

export default Ingredients;
