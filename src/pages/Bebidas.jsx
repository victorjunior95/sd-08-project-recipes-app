import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import fetchBebidas from '../services/fetchBebidas';

function Bebidas() {
  const { bebidas, setBebidas } = useContext(ContextReceitas);
  console.log(bebidas.drinks);

  useEffect(() => {
    async function listaBebidasAPI() {
      const bebidasAPI = await fetchBebidas();
      setBebidas(bebidasAPI);
    }
    listaBebidasAPI();
  }, []);

  return (
    <>
      { bebidas ? bebidas.map((bebida, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ bebida.idDrink }>
          <img
            data-testid={ `${index}-card-img` }
            src={ bebida.strDrinkThumb }
            alt={ bebida.strDrink }
          />
          <p data-testid={ `${index}-card-name` }>{ bebida.strDrink }</p>
        </div>
      )) : <h1>Carregando... </h1> }
    </>
  );
}

export default Bebidas;
