import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';

function Cards({ title }) {
  const history = useHistory();
  const {
    type,
    comidas,
    bebidas,
    setType,
    setRecipe,
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

  function redirectToDetails(id) {
    history.push(`/${title.toLowerCase()}/${id}`);
  }

  return (
    array.map((item, index) => {
      if (index <= LIMIT) {
        return (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
            onClick={ () => {
              setRecipe(item[`id${type.palavra}`]);
              redirectToDetails(item[`id${type.palavra}`]);
            } }
            onKeyPress={ () => console.log('clicou') }
            role="button"
            tabIndex={ index }
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
