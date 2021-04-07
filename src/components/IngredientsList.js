import React from 'react';
import PropTypes from 'react-bootstrap/esm/Image';

function IngredientsList(props) {
  const { ingredients, measure, id } = props;
  console.log(ingredients, measure, id);
  // const arrayOfIngredients = [];

  const saveLocalStorage = (name) => {
    const recipesProgress = JSON
      .parse(localStorage.getItem('inProgressRecipes'));
    // console.log(Object.keys(Object.entries(recipesProgress)[1][1]));
    console.log(name);
    const arrayOfIngredients = Object.keys(Object.entries(recipesProgress)[1][1]);
    if (!arrayOfIngredients.some((item) => Number(item) === id)) {
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

  // useEffect(() => {
  //   const recipesProgress = JSON
  //     .parse(localStorage.getItem('inProgressRecipes'));
  //   Object.keys(Object.entries(recipesProgress)[1][1].find((item) => item === id);
  // }, [])

  return (
    <ul>
      { ingredients.map((ing, i) => (
        <li
          key={ i }
          data-testid={ `${i}-ingredient-step` }
        >
          <input
            type="checkbox"
            name={ ing }
            onChange={ (e) => handleIngredients(e.target) }
          />
          { `${measure[i]} of ${ing}` }
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
