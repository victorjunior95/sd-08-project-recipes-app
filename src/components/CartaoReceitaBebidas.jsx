import React, { useContext } from 'react';
import ContextReceitas from '../context/ContextReceitas';

const DOZE = 12;
const CEM = 100;
const CartaoReceitaBebidas = () => {
  const {
    apiResult,
  } = useContext(ContextReceitas);

  return (
    <>
      {apiResult.slice(0, DOZE).map((element, i) => (
        <div key={ i } data-testid={ `${i}-recipe-card` }>
          <img
            width={ `${CEM}px` }
            data-testid={ `${i}-card-img` }
            src={ element.strDrinkThumb }
            alt={ element.strDrink }
          />
          <h1 data-testid={ `${i}-card-name` }>{element.strDrink}</h1>
        </div>

      ))}
    </>
  );
};

export default CartaoReceitaBebidas;
