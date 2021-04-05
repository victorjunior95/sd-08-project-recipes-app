import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import Recommendation from './Recommendation';

export default class ItemsDetails extends Component {
  juntar(chave, itemValue) {
    return Object.entries(itemValue).map((nome) => {
      if (nome[0].includes(chave)) {
        return nome[1];
      }
      return undefined;
    }).filter((element) => element !== undefined);
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

  render() {
    const { type, result } = this.props;
    return (
      <>
        <img
          data-testid="recipe-photo"
          src={ result[`str${type}Thumb`] }
          alt="img"
          width="70px"
        />
        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="share icon" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ whiteHeartIcon } alt="favorite" />
        </button>
        <h1 data-testid="recipe-title">{ result[`str${type}`] }</h1>
        <p data-testid="recipe-category">
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
        >
          Iniciar Receita
        </Button>
      </>
    );
  }
}

ItemsDetails.propTypes = {
  type: PropTypes.string.isRequired,
  result: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
