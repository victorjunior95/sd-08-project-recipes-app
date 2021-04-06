import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import copy from 'clipboard-copy';
import blackHeartIcon from '../images/blackHeartIcon.svg';

// svg && icon
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

// Components
import Recommendation from './Recommendation';

class ItemsDetails extends Component {
  constructor() {
    super();
    this.state = {
      copied: false,
      favorited: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleFav = this.handleFav.bind(this);
  }

  handleClick() {
    const { pathname } = this.props;
    copy(`http://localhost:3000${pathname}`);
    this.setState({
      copied: true,
    });
  }

  handleProgress(type, id) {
    const { history } = this.props;
    if (type === 'Meal') {
      return history.push(`/comidas/${id}/in-progress`);
    }
    return history.push(`/bebidas/${id}/in-progress`);
  }

  handleFav(id) {
    // const { favorited } = this.state;
    // this.setState({ favorited: !favorited });
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorites && Array.isArray(favorites)) {
      const checkFav = favorites.includes(id);
      if (checkFav === true) {
        const filterFav = favorites.filter((favorite) => id !== favorite);
        console.log(filterFav);
        localStorage.setItem('favoriteRecipes', JSON.stringify(filterFav));
      }
      const fav = [...favorites, id];
      return localStorage.setItem('favoriteRecipes', JSON.stringify(fav));
    } if (favorites) {
      const fav = [favorites, id];
      return localStorage.setItem('favoriteRecipes', JSON.stringify(fav));
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(id));
  }

  juntar(chave, itemValue) {
    return Object.entries(itemValue).map((nome) => {
      if (nome[0].includes(chave)) {
        return nome[1];
      }
      return undefined;
    }).filter((element) => element !== undefined);
  }

  checkRecipeProgress(type, id) {
    const inLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (type === 'Meal' && inLocalStorage && inLocalStorage.meals) {
      const filterId = Object.keys(inLocalStorage.meals)
        .find((localId) => id === localId);
      if (filterId) {
        return 'Continuar Receita';
      }
    }
    if (type === 'Drink' && inLocalStorage && inLocalStorage.cocktails) {
      const filterId = Object.keys(inLocalStorage.cocktails)
        .find((localId) => id === localId);
      if (filterId) {
        return 'Continuar Receita';
      }
    }
    return 'Iniciar Receita';
  }

  ingredientesComQuantidades(itemValue) {
    const ingredient = this.juntar('strIngredient', itemValue);
    const measure = this.juntar('strMeasure', itemValue);
    return ingredient.map((nome, index) => {
      if (nome) {
        return (
          <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${nome} - ${measure[index]}`}
          </p>
        );
      }
      return undefined;
    });
  }

  startRecipe(type, id) {
    const inLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (type === 'Meal') {
      console.log(inLocalStorage);
      if (inLocalStorage !== null) {
        const newArray = { ...inLocalStorage,
          meals: { ...inLocalStorage.meals, [id]: [] } };
        localStorage.setItem('inProgressRecipes', JSON.stringify(newArray));
        return;
      }
      const newArray = { meals: { [id]: [] } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newArray));
    }
    if (type === 'Drink') {
      if (inLocalStorage !== null) {
        const newArray = { ...inLocalStorage,
          cocktails: { ...inLocalStorage.cocktails, [id]: [] } };
        localStorage.setItem('inProgressRecipes', JSON.stringify(newArray));
        return;
      }
      const newArray = { cocktails: { [id]: [] } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newArray));
    }
  }

  render() {
    const { copied, favorited } = this.state;
    const { type, result, pathname } = this.props;
    return (
      <>
        <img
          data-testid="recipe-photo"
          src={ result[`str${type}Thumb`] }
          alt="img"
          width="70px"
        />

        {result.strAlcoholic ? (
          <p data-testid="recipe-category">
            {result.strAlcoholic}
          </p>
        ) : (
          <p data-testid="recipe-category">
            {result.strCategory}
          </p>
        )}

        <button type="button" onClick={ this.handleClick } data-testid="share-btn">
          <img src={ shareIcon } alt="share icon" />
        </button>
        {copied && <span>Link copiado!</span>}
        <button
          type="button"
          onClick={ () => this.handleFav(result[`id${type}`]) }
          data-testid="favorite-btn"
        >
          <img src={ favorited ? blackHeartIcon : whiteHeartIcon } alt="favorite" />
        </button>
        <h1 data-testid="recipe-title">{ result[`str${type}`] }</h1>
        <p>
          { result.strCategory }
        </p>
        {result.strYoutube
        && <iframe
          title="video"
          data-testid="video"
          src={ result.strYoutube.replace('watch?v=', 'embed/') }
        />}
        <div>
          {this.ingredientesComQuantidades(result)}
        </div>
        <p data-testid="instructions">
          Instruções:
          {result.strInstructions}
        </p>
        <Recommendation />

        <Button
          className="start-recipe-btn"
          data-testid="start-recipe-btn"
          variant="success"
          block
          onClick={
            () => {
              this.startRecipe(type, result[`id${type}`]);
              this.handleProgress(type, result[`id${type}`]);
            }
          }
        >
          {this.checkRecipeProgress(type, result[`id${type}`])}
        </Button>
      </>
    );
  }
}

export default ItemsDetails;

ItemsDetails.propTypes = {
  type: PropTypes.string.isRequired,
  result: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
