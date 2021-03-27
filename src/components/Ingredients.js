import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import '../styles/Ingredients.css';

function Ingredients({ status, id }) {
  const { recipeDetails } = useContext(Context);

  const details = Object.values(recipeDetails[0])[0];
  const recipe = Object.values(recipeDetails[0])[0][0];

  useEffect(() => {
    const loadChecks = JSON.parse(localStorage.getItem('usedIngredients')) || {};
    if (id === loadChecks[loadChecks.length - 1]) {
      const checks = [...document.getElementsByClassName('checkbox')];
      checks.map((item, index) => {
        item.checked = loadChecks[index];
        console.log('oi');
        return item.checked;
      });
    }
  }, []);

  function saveChecks() {
    const checks = [...document.getElementsByClassName('checkbox')];
    const saveCheck = checks.map((item) => item.checked);
    saveCheck.push(id);
    console.log(saveCheck);
    localStorage.setItem('usedIngredients', JSON.stringify(saveCheck));
    // https://www.sitepoint.com/quick-tip-persist-checkbox-checked-state-after-page-reload/
  }

  return (
    <section>
      <h5>Ingredients</h5>
      {
        status === 'ongoing' ? (
          <fieldset id="fieldset">
            {
              Object.keys(details[0]).map((item, index) => (
                recipe[`strIngredient${index + 1}`] !== ''
              && recipe[`strIngredient${index + 1}`]
                  ? (
                    <div key={ index }>
                      <input
                        type="checkbox"
                        key={ index }
                        id={ index }
                        className="checkbox"
                        data-testid="ingredient-step"
                        onChange={ saveChecks }
                        required
                      />
                      <label htmlFor={ index }>
                        { `${recipe[`strIngredient${index + 1}`]} - 
                        ${recipe[`strMeasure${index + 1}`]}` }
                      </label>
                      <Link
                        to="/receitas-feitas"
                        type="submit"
                        className="last-btn"
                        data-testid="finish-recipe-btn"
                        // disabled={ document.querySelectorAll('.checkbox').checked }
                      >
                        Finalizar Receita
                      </Link>
                    </div>
                  )
                  : null
              ))
            }
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
