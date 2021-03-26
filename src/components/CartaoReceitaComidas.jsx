import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContextReceitas from '../context/ContextReceitas';

const DOZE = 12;
const CINQUENTA = 50;
const CartaoReceitaComidas = ({ resultadoApi }) => {
  // const { deveriaRedirecionar } = useContext(ContextReceitas);
  return (
    <>
      { resultadoApi.slice(0, DOZE).map((element, i) => (
        <Link to={ `/comidas/${element.idMeal}` } >
        <div
          key={ i }
          id={ element.idMeal }
          data-testid={ `${i}-recipe-card` }
          // onClick={ click }
        >
          <img
            width={ `${CINQUENTA}vh` }
            alt={ element.strMeal }
            data-testid={ `${i}-card-img` }
            src={ element.strMealThumb }
          />
          <h1 data-testid={ `${i}-card-name` }>{element.strMeal}</h1>
        </div>
        </Link>
      ))}
    </>
  );
};

export default CartaoReceitaComidas;