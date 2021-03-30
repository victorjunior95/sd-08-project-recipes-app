import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as storage from '../services/storage';

import styles from '../styles/components/RenderIngredientsWithStep.module.css';

const RenderIngredients = ({ ingredients, measures, id }) => {
  const form = useRef();
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    const recipeIngredients = (JSON.parse(storage.getInProgress()) || [])[id];
    console.log('inside useeffect', recipeIngredients);
    setCheckedIngredients(recipeIngredients || []);
  }, []);

  function handleChange() {
    const inputs = form.current.querySelectorAll('[type="checkbox"');
    const formatedIngredients = Array.from(inputs)
      .filter((input) => input.checked)
      .map((input) => (input.parentElement.textContent));
    storage.saveInProgressRecipe({ id, ingredients: formatedIngredients });
    setCheckedIngredients(formatedIngredients);
  }

  return (
    <div className={ styles.ingredientsContainer }>
      <h2>Ingredients</h2>
      <form
        ref={ form }
        className={ styles.ingredients }
        onChange={ handleChange }
      >
        { console.log(checkedIngredients)}
        {ingredients
          .map((ingredient, index) => (
            <label
              htmlFor={ `${index}-ingredient-step` }
              data-testid={ `${index}-ingredient-step` }
              key={ index }
            >
              <input
                id={ `${index}-ingredient-step` }
                type="checkbox"
                checked={ checkedIngredients
                  .includes(`${ingredient}: ${measures[index]}`) }
                onChange={ () => {} }
              />
              { `${ingredient}: ${measures[index]}` }
            </label>
          ))}
      </form>
    </div>
  );
};

RenderIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default RenderIngredients;
