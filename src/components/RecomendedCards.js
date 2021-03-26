import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function RecomendedCards({ title }) {
  const { bebidas, comidas } = useContext(MyContext);
  let type;
  let arrayToRender = [];

  if (title === 'comidas') {
    type = 'Meal';
    arrayToRender = comidas;
  } else {
    type = 'Drink';
    arrayToRender = bebidas;
  }

  return (
    arrayToRender.map((item, index) => {
      if (index <= 1) {
        return (
          <div
            key={ index }
            data-testid={ `${index}-recomendation-card` }
            // onClick={ () => {
            //   setObjFiltrado(item);
            //   redirectToDetails(item[`id${type.palavra}`]);
            // } }
            // onKeyPress={ () => console.log('clicou') }
            // role="button"
            // tabIndex={ index }
          >
            <h3 data-testid={ `${index}-card-name` }>
              { item[`str${type}`] }
            </h3>
            <img
              alt={ item[`str${type}`] }
              data-testid={ `${index}-card-img` }
              src={ item[`str${type}Thumb`] }
            />
          </div>
        );
      }
      return null;
    })
  );
}

export default RecomendedCards;
