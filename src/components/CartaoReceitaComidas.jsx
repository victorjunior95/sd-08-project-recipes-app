import React, { useContext } from 'react';
import ContextReceitas from '../context/ContextReceitas';

const DOZE = 12;
const CINQUENTA = 50;
const CartaoReceitaComidas = () => {
  const {
    apiResult,
  } = useContext(ContextReceitas);

  return (
    <>
      { apiResult.slice(0, DOZE).map((element, i) => (
        <div
          key={ i }
          data-testid={ `${i}-recipe-card` }
        >
          <img
            width={ `${CINQUENTA}vh` }
            alt={ element.strMeal }
            data-testid={ `${i}-card-img` }
            src={ element.strMealThumb }
          />
          <h1 data-testid={ `${i}-card-name` }>{element.strMeal}</h1>
        </div>

      ))}
    </>
  );
};

export default CartaoReceitaComidas;
