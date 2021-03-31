import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../styles/IngredientesEmProcesso.css';

function Ingredientes({ id, type }) {
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

  const objPronto = newObj.reduce((acumulador, valorAtual) => {
    const firstNull = valorAtual.substr(0, FINAL_NULL);
    if (valorAtual[0] !== ' ' && firstNull !== 'null') {
      return acumulador.concat(valorAtual);
    }
    return acumulador;
  }, []);

  function handleClick({ target }) {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (target.parentNode.classList.contains('riscado')) {
      target.parentNode.classList.remove('riscado');
    } else {
      target.parentNode.classList.add('riscado');
    }
  }

  return (
    <ul>
      {objPronto.map((ingrediente, index) => (
        <li key={ index } data-testid={ `${index} ingredient-step` }>
          <label htmlFor={ ingrediente }>
            <input
              type="checkbox"
              name={ ingrediente }
              value={ ingrediente }
              onClick={ handleClick }
            />
            {ingrediente}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default Ingredientes;
