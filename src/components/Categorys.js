import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Categorys({ title }) {
  const {
    categoryComidas,
    categoryBebidas,
  } = useContext(MyContext);
  console.log(categoryBebidas, categoryComidas);
  const LIMIT = 4;
  let arrayCategory = [];

  if (title === 'Comidas') {
    arrayCategory = categoryComidas;
  } else {
    arrayCategory = categoryBebidas;
  }

  return (
    arrayCategory.map((item, index) => {
      if (index <= LIMIT) {
        return (
          <button type="button" data-testid={ `${item.strCategory}-category-filter` }>
            {item.strCategory}
          </button>
        );
      }
      return null;
    })
  );
}

export default Categorys;
