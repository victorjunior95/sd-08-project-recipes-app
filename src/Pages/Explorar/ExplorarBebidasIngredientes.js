import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ExplorarBebidasIngredientes() {
  const [ingredientes, setIngredientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const TWELVE_INGREDIENTS = 12;

  const fetchIngredients = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const result = await response.json();
    const finalResults = result.drinks.filter((elem, index) => {
      if (index < TWELVE_INGREDIENTS) {
        return elem;
      }
      return '';
    });
    setIngredientes(finalResults);
    setLoading(false);
  };

  // const redirectIngredientes = async (param) => {
  //   console.log(param);
  // };
  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      {!loading && ingredientes.map((elem, index) => (
        <label
          htmlFor={ `${index}-checkbox` }
          key={ `${elem.idIngredient1}, ${index} ` }
        >
          <input
            name={ elem.idIngredient1 }
            value={ elem.idIngredient1 }
            type="checkbox"
            id={ `${index}-checkbox` }
            // onChange={ ({ target }) => console.log(target.parentNode.children[1].firstChild.innerText) }
          />
          <div
            key={ `${elem.idIngredient1}, ${index} ` }
            data-testid={ `${index}-ingredient-card` }
          >
            <h1 data-testid={ `${index}-card-name` }>
              {elem.strIngredient1}
            </h1>
            <img data-testid={ `${index}-card-img` } src={ `https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient1}-Small.png` } alt={ elem.strIngredient1 } />
          </div>
        </label>
      ))}
    </div>
  );
}

ExplorarBebidasIngredientes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExplorarBebidasIngredientes;
