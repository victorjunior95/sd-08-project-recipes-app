import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import Recomendations from './Recomendations';
import '../css/Details.css';

const doneRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];
function Details(props) {
  const history = useHistory();
  const { currentFood, ingredients } = props;
  const [disabled, setDisabled] = useState(false);
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  const [doneList] = useState(JSON.parse(
    localStorage.getItem('doneRecipes') || '{}',
  ));

  useEffect(() => {
    function disabledBtn() {
      const currentId = currentFood.idMeal || currentFood.idDrink;
      const filterFood = doneList.filter((filter) => (
        filter.id === currentId
      ));
      if (filterFood.length > 0) {
        setDisabled(true);
      }
    }
    disabledBtn();
  }, [currentFood]);

  const ytVideo = () => (
    currentFood.strYoutube ? <iframe
      frameBorder="0"
      data-testid="video"
      key={ currentFood.strYoutube }
      src={ currentFood.strYoutube.split('watch?v=').join('embed/') }
      title="recipe video"
    />
      : ''
  );

  const historyPath = () => (
    history.push(`${history.location.pathname}/in-progress`)
  );

  function loadingScreen() {
    return (
      <div>LOADING...</div>
    );
  }

  function renderDetails() {
    return (
      <>
        <img
          src={ currentFood.strMealThumb || currentFood.strDrinkThumb }
          data-testid="recipe-photo"
          alt="Thumbnail"
        />
        <h1 data-testid="recipe-title">
          { currentFood.strMeal || currentFood.strDrink }
        </h1>
        <p data-testid="share-btn">btnCompartilhar</p>
        <p data-testid="favorite-btn">btnFavorito</p>
        <h6
          data-testid="recipe-category"
        >
          { currentFood.strAlcoholic
            ? currentFood.strAlcoholic : currentFood.strCategory }
        </h6>
        <h2>Ingredientes</h2>
        <ul>
          { ingredients.map((curr, index) => (
            <li
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ index }
            >
              { curr }
            </li>
          ))}
        </ul>
        <h2>Instruções</h2>
        <p data-testid="instructions">{ currentFood.strInstructions }</p>
        { ytVideo() }
        <Recomendations />
        <Button
          disabled={ disabled }
          className="start-recipe-btn"
          datatestid="start-recipe-btn"
          label="Iniciar Receita"
          onClick={ historyPath }
        />
      </>
    );
  }

  return (
    <div className="detailsDiv">
      { currentFood.strCategory ? renderDetails() : loadingScreen() }
    </div>
  );
}

Details.propTypes = {
  currentFood: PropTypes.objectOf(PropTypes.any),
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

Details.defaultProps = {
  currentFood: {},
  ingredients: [],
};

export default Details;
