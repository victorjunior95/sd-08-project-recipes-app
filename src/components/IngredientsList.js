import React, { useEffect, useState } from 'react';
import PropTypes from 'react-bootstrap/esm/Image';

function IngredientsList(props) {
  const { ingredients, measure, id } = props;
  // console.log(ingredients, measure, id);
  // const arrayOfIngredients = [];
  const [itensChecked, setItensChecked] = useState();

  const saveLocalStorage = (name) => {
    const recipesProgress = JSON
      .parse(localStorage.getItem('inProgressRecipes'));
    // console.log(Object.keys(Object.entries(recipesProgress)[1][1]));
    // console.log(name);
    const arrayOfIngredients = Object.keys(Object.entries(recipesProgress)[1][1]);
    if (!arrayOfIngredients.some((item) => Number(item) === Number(id))) {
      // console.log(arrayOfIngredients);
      return localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          ...recipesProgress,
          meals: { ...recipesProgress.meals,
            [id]: [name],
          },
        }),
      );
    }
    const removeItem = recipesProgress.meals[id].indexOf(name);
    return removeItem >= 0
      ? localStorage.setItem('inProgressRecipes', JSON.stringify({ ...recipesProgress,
        meals: { ...recipesProgress.meals,
          [id]: recipesProgress.meals[id].filter((index) => index !== name),
        } }))
      : localStorage.setItem('inProgressRecipes', JSON.stringify({ ...recipesProgress,
        meals: { ...recipesProgress.meals,
          [id]: [...recipesProgress.meals[id], name],
        } }));
  };

  const handleIngredients = ({ name }) => {
    // console.log(name);
    saveLocalStorage(name);
  };

  useEffect(() => {
    const recipesProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    // console.log(id);
    // console.log(recipesProgress.meals[id]);
    const getLocalStorage = recipesProgress.meals[id];
    const getTags = document.getElementsByTagName('input');
    console.log(getTags);
    if (getLocalStorage !== undefined) {
      for (let i = 0; i < ingredients.length; i += 1) {
        for (let x = 0; x < getLocalStorage.length; x += 1) {
          if (ingredients[i] === getLocalStorage[x]) {
            console.log('xablau');
          }
        }
      }
    }
  }, []);

  // console.log(ingredients);
  return (
    <ul>
      { ingredients.map((ing, i) => (
        <li
          key={ i }

        >
          <label htmlFor={ ing } data-testid={ `${i}-ingredient-step` }>

            <input
              type="checkbox"
              name={ ing }
              id={ ing }
              onChange={ (e) => handleIngredients(e.target) }
            />
            { `${measure[i]} of ${ing}` }
          </label>
        </li>
      )) }
    </ul>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.array,
  measure: PropTypes.array,
  id: PropTypes.string,
}.isRequired;

export default IngredientsList;
