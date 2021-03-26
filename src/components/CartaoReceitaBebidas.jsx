import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContextReceitas from '../context/ContextReceitas';

const DOZE = 12;
const CINQUENTA = 50;
const CartaoReceitaBebidas = ({ resultadoApi, click }) => {
  const { deveriaRedirecionar } = useContext(ContextReceitas);

  return (
    <>
      {resultadoApi.slice(0, DOZE).map((element, i) => (
        <div
          key={ i }
          data-testid={ `${i}-recipe-card` }
          id={ element.idDrink }
          onClick={ click }
        >
          <img
            width={ `${CINQUENTA}vh` }
            data-testid={ `${i}-card-img` }
            src={ element.strDrinkThumb }
            alt={ element.strDrink }
          />
          <h1 data-testid={ `${i}-card-name` }>{element.strDrink}</h1>
          {deveriaRedirecionar && <Redirect to={ `/bebidas/${element.idDrink}` } />}
        </div>

      ))}
    </>
  );
};

CartaoReceitaBebidas.propTypes = {
  resultadoApi: PropTypes.arrayOf.isRequired,
  click: PropTypes.func.isRequired,
};

export default CartaoReceitaBebidas;
