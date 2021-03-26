import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import getDrinks from '../helpers/drinkApi';

export default function CardIngredients({ index, name }) {
  const [setControl] = useState(false);
  const [setRecipes] = useState([]);
  const [setFilteredRecipes] = useState([]);
  const history = useHistory();
  const src = `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;
  const path = '/bebidas';

  const fetchDrinks = async (type, value, controlVar) => {
    const result = await getDrinks(type, value);
    setRecipes(result);
    if (controlVar) setFilteredRecipes(result);
    if (!controlVar) {
      return null;
    }
    const resultReturn = {
      result,
      redirect: false,
    };
    if (result.drinks === null) {
      return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
    if (result.drinks.length === 1) {
      resultReturn.redirect = true;
      setControl(true);
      return resultReturn;
    }
    setControl(true);
    return resultReturn;
  };
  const searchRecipes = async () => {
    await fetchDrinks('ingredient', name, true);
    history.push(path);
  };

  return (
    <div
      className="recipe-card"
      data-testid={ `${index}-ingredient-card` }
    >
      <button
        type="button"
        onClick={ searchRecipes }
      >
        <img
          alt="Recipe Thumbnail"
          data-testid={ `${index}-card-img` }
          src={ src }
          className="recipe-thumb"
          height="250"
        />
        <h2
          className="recipe-name"
          data-testid={ `${index}-card-name` }
        >
          {name}
        </h2>
      </button>
    </div>
  );
}

CardIngredients.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
