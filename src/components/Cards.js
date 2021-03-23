import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Cards() {
  const {
    apiResponse,
    type,
  } = useContext(MyContext);
  const LIMIT = 11;

  return (
    apiResponse[type.item].map((item, index) => {
      if (index <= LIMIT) {
        return (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <h3 data-testid={ `${index}-card-name` }>
              { item[`str${type.palavra}`] }
            </h3>
            <img
              alt={ item[`str${type.palavra}`] }
              data-testid={ `${index}-card-img` }
              src={ item[`str${type.palavra}Thumb`] }
            />
          </div>
        );
      }
      return null;
    })
  );
}

export default Cards;
