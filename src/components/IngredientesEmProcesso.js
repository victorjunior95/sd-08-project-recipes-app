import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import verifyInProgress from '../services/verifyInProgress';
import '../styles/IngredientesEmProcesso.css';

function IngredientesEmProcesso({ id, type }) {
  const FINAL_NULL = 4;
  const {
    recipe,
  } = useContext(MyContext);
  const newObj = [];
  let cont = 1;
  const keys = Object.keys(recipe);

  keys.map((key) => {
    if (key.includes('strIngredient')) {
      newObj.push(
        `${recipe[`strIngredient${cont}`]} - ${recipe[`strMeasure${cont}`]}`,
      );
      cont += 1;
    }
    return null;
  });

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    console.log(storage);
    if (!storage) {
      console.log('entrou no if do effect');
      verifyInProgress(id, type);
    }
  }, [id, type]); // []

  const objPronto = newObj.reduce((acumulador, valorAtual) => {
    const firstNull = valorAtual.substr(0, FINAL_NULL);
    if (valorAtual[0] !== ' ' && firstNull !== 'null') {
      return acumulador.concat(valorAtual);
    }
    return acumulador;
  }, []);

  function handleClick({ target }) {
    // const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (target.parentNode.classList.contains('riscado')) {
      target.parentNode.classList.remove('riscado');
      // const filteredStorage = inProgress[type][id]
      //   .filter((item) => item !== target.value);
      // inProgress[type][id] = filteredStorage;
      // localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    } else {
      target.parentNode.classList.add('riscado');
      // target.classList.add('teste');
      // if (inProgress[type][id].some((item) => item === target.value)) {
      //   return null;
      // }
      // inProgress[type][id].push(target.value);
      // localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    }
  }

  // function inputChecked(name) {
  //   const storageAtual = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  //   const retorno = storageAtual[type][id].some((item) => item === name);
  //   return retorno;
  // }

  return (
    <div>
      <h2>Ingredientes</h2>
      <ul>
        {objPronto.map((ingrediente, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-step` }>
            <label htmlFor={ ingrediente }>
              <input
                type="checkbox"
                name={ ingrediente }
                value={ ingrediente }
                onClick={ handleClick }
                // checked={ inputChecked(ingrediente) }
              />
              {ingrediente}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

IngredientesEmProcesso.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientesEmProcesso;
