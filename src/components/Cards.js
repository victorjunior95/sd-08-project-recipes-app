import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function Cards({ title }) {
  const {
    type,
    comidas,
    bebidas,
    setType,
  } = useContext(MyContext);
  const LIMIT = 11;
  let array = [];
  if (title === 'Comidas') {
    array = comidas;
  } else {
    array = bebidas;
  }

  useEffect(() => {
    if (title === 'Comidas') {
      setType({
        item: 'meals',
        palavra: 'Meal',
      });
    } else {
      setType({
        item: 'drinks',
        palavra: 'Drink',
      });
    }
  }, []);

  return (
    array.map((item, index) => {
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
