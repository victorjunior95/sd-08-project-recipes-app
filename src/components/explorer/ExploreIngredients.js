import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { ingredients } from '../../services';

const ExploreIngredients = ({ type }) => {
  const history = useHistory();
  const path = history.location.pathname;
  let isClicked = false;

  async function ingredientsAPI() {
    const responseAPI = await ingredients(type);
    if (type === 'Drink') {
      RedirectPages(`/${type}/${responseAPI.meals[0].idMeal}`);
    } else {
      RedirectPages(`/${type}/${responseAPI.drinks[0].idDrink}`);
    }
  }
  const popTags = () => (
    tags.map((tagName, tagInex) => (
      <p
        key={ tagInex }
        data-testid={ `${index}-${tagName}-horizontal-tag` }
      >
        {tagName}
      </p>
    ))
  );
  function handleClick() {
    if (isFood) {
      history.push(`/comidas/${id}`);
    } else {
      history.push(`/bebidas/${id}`);
    }
    console.log(history);
  }
  let urlDetails = '';
  if (isFood) {
    urlDetails = `http://localhost:3000/comidas/${id}`;
  } else {
    urlDetails = `http://localhost:3000/bebidas/${id}`;
  }
  if (path === '/bebidas' || path === '/comidas') {
    return (
      <button
        type="button"
        onClick={ () => handleClick() }
        data-testid={ `${index}-recipe-card` }
      >
        <p data-testid={ `${index}-card-name` }>{name}</p>
        <img
        // style={ `max-width:200px;
        //     max-height:150px;
        //     width: auto;
        //     height: auto ;` }
          width="320"
          height="205"
          src={ thumbnail }
          alt="Foto da receita"
          data-testid={ `${index}-card-img` }
        />
      </button>
    );
  } if (path === '/receitas-feitas') {
    return (
      <div data-testid={ `${index}-recipe-card` }>

        <input
          type="image"
          onClick={ () => handleClick() }
          width="320"
          height="205"
          src={ thumbnail }
          alt="Foto da receita"
          data-testid={ `${index}-horizontal-image` }
        />
        {isFood
          ? <p data-testid={ `${index}-horizontal-top-text` }>{`${area} - ${cat}`}</p>
          : <p data-testid={ `${index}-horizontal-top-text` }>{alcoholic}</p>}
        <a data-testid={ `${index}-horizontal-name` } href={ urlDetails }>{name}</a>
        <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
        <input
          type="image"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="share"
          onClick={ () => { copy(urlDetails); isClicked = true; } }
        />
        <p hidden={ isClicked }>Link copiado!</p>
        {() => popTags()}
      </div>
    );
  } if (path === '/receitas-favoritas') {
    return (
      <div data-testid={ `${index}-recipe-card` }>

        <input
          type="image"
          onClick={ () => handleClick() }
          width="320"
          height="205"
          src={ thumbnail }
          alt="Foto da receita"
          data-testid={ `${index}-horizontal-image` }
        />
        {isFood
          ? <p data-testid={ `${index}-horizontal-top-text` }>{`${area} - ${cat}`}</p>
          : <p data-testid={ `${index}-horizontal-top-text` }>{alcoholic}</p>}
        <a data-testid={ `${index}-horizontal-name` } href={ urlDetails }>{name}</a>
        <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
        <input
          type="image"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="share"
          onClick={ () => { copy(urlDetails); isClicked = true; } }
        />
        <input
          type="image"
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="share"
          onClick={ () => { } }
        />
        <p hidden={ isClicked }>Link copiado!</p>
        {() => popTags()}
      </div>
    );
  }
};
ExploreIngredients.defaultProps = {
  category: '',
  doneDate: '',
  tags: [],
  area: '',
  alcoholic: '',
};

ExploreIngredients.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  isFood: PropTypes.bool.isRequired,
  category: PropTypes.string,
  doneDate: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  area: PropTypes.string,
  alcoholic: PropTypes.string,
};

export default ExploreIngredients;
