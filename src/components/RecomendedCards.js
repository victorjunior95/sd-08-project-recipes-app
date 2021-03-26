import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../styles/RecomendedCards.css';

function RecomendedCards({ title }) {
  const LIMIT_RECOMENDED_CARDS = 5;
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
    <div className="recomended-cards">
      {arrayToRender.map((item, index) => {
        if (index <= LIMIT_RECOMENDED_CARDS) {
          return (
            <div className="cartao">
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
                <h3 data-testid={ `${index}-recomendation-title` }>
                  { item[`str${type}`] }
                </h3>
                <img
                  alt={ item[`str${type}`] }
                  data-testid={ `${index}-card-img` }
                  src={ item[`str${type}Thumb`] }
                />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default RecomendedCards;
