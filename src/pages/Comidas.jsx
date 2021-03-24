import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import fetchComidas from '../services/fetchComidas';

function Comidas() {
  const { comidas, setComidas } = useContext(ContextReceitas);

  useEffect(() => {
    async function listaComidasAPI() {
      const ComidasAPI = await fetchComidas();
      setComidas(ComidasAPI);
    }
    listaComidasAPI();
  }, []);

  return (
    <>
      { comidas ? comidas.map((comida, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ comida.idMeal }>
          <img
            data-testid={ `${index}-card-img` }
            src={ comida.strMealThumb }
            alt={ comida.strMeal }
          />
          <p data-testid={ `${index}-card-name` }>{ comida.strMeal }</p>
        </div>
      )) : <h1>Carregando... </h1> }
    </>
  );
}

export default Comidas;
