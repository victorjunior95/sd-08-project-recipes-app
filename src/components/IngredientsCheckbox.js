import React from 'react';
import PropTypes from 'prop-types';

function IngredientsCheckbox({ objDetail, id, url }) {
  const verifyIngredientsChecked = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (url.includes('comida')) {
      return inProgressRecipes.meals[id];
    }
  };

  const handleChange = ({ target }) => {
    const ol = target.parentNode.parentNode.parentNode;
    const lista = ol.childNodes;
    const listaDeIngredientes = [];

    lista.forEach((elem) => {
      const checkbox = elem.firstChild.firstChild;
      if (checkbox.checked) {
        listaDeIngredientes.push(checkbox.id);
      }
    });

    console.log(listaDeIngredientes);
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (url.includes('comidas')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...inProgressRecipes,
        meals: {
          ...inProgressRecipes.meals,
          [id]: listaDeIngredientes,
        },
      }));
    }
    if (url.includes('bebidas')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...inProgressRecipes,
        cocktails: {
          ...inProgressRecipes.cocktails,
          [id]: listaDeIngredientes,
        },
      }));
    }
  };
  const getIngredients = () => {
    const ingredientes = Object.entries(objDetail[0]);

    const measure = ingredientes.filter((elem) => (
      elem[0].includes('strMeasure') && elem[1] !== null && elem[1] !== ''
    ));
    const filtering = ingredientes.filter((element) => (
      element[0].includes('strIngredient') && element[1] !== null && element[1] !== ''));

    const results = filtering.map((elem, index) => (
      <li
        name="li-ingredients"
        key={ elem[1] }
        data-testid={ `${index}-ingredient-step` }
      >
        <label htmlFor={ elem[1] }>
          <input
            checked={  }
            onChange={ handleChange }
            type="checkbox"
            id={ elem[1] }
          />
          {elem[1]}
          <span>{measure[index] === undefined ? '' : measure[index][1]}</span>
        </label>
      </li>));

    return results;
  };

  return (
    <ol className="ingredient-list">
      {verifyIngredientsChecked()}
      {getIngredients()}
    </ol>
  );
}

IngredientsCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  objDetail: PropTypes.shape(
    PropTypes.any,
  ).isRequired,
};

export default IngredientsCheckbox;
