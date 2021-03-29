import React, { Component } from 'react';
import PropTypes from 'prop-types';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      results: '',
    };

    this.fetchRecipe = this.fetchRecipe.bind(this);
  }

  componentDidMount() {
    this.fetchRecipe();
  }

  juntar(chave) {
    const { results } = this.state;
    return Object.entries(results.meals[0]).map((nome) => {
      if (nome[0].includes(chave)) {
        return nome[1];
      }
      return undefined;
    }).filter((element) => element !== undefined);
  }

  ingredientesComQuantidades() {
    const ingredient = this.juntar('strIngredient');
    const measure = this.juntar('strMeasure');
    return ingredient.map((nome, index) => {
      if (nome) {
        return (
          <>
            <input
              key={ nome }
              type="checkbox"

            />
            <p data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${nome} - ${measure[index]}`}
            </p>
          </>
        );
      }
      return undefined;
    });
  }

  async fetchRecipe() {
    const { location: { pathname } } = this.props;
    const id = pathname.split('/')[2];
    const type = pathname.split('/')[1];
    if (type === 'comidas') {
      const req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const results = await req.json();
      this.setState({ results });
    }
    if (type === 'bebidas') {
      const req = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const results = await req.json();
      this.setState({ results });
    }
  }

  renderMeal() {
    const { location: { pathname } } = this.props;
    const type = pathname.split('/')[1];
    const { results } = this.state;
    return (
      <div>
        {
          type === 'comidas'
            ? (
              <>
                <img
                  data-testid="recipe-photo"
                  src={ results.meals[0].strMealThumb }
                  alt="img"
                  width="70px"
                />
                <button type="button" data-testid="share-btn">
                  <img src={ shareIcon } alt="share icon" />
                </button>
                <button type="button" data-testid="favorite-btn">
                  <img src={ whiteHeartIcon } alt="favorite" />
                </button>
                <h1 data-testid="recipe-title">{ results.meals[0].strMeal }</h1>
                <p data-testid="recipe-category">
                  { results.meals[0].strCategory }
                </p>
                <iframe
                  title="video"
                  data-testid="video"
                  src={ results.meals[0].strYoutube.replace('watch?v=', 'embed/') }
                />
                {results.meals[0].strDrinkAlternate
                && results.meals[0].strDrinkAlternate
                  .map((drinkAlternate, index) => (
                    <p
                      key={ drinkAlternate }
                      data-testid={ `${index}-recomendation-card` }
                    >
                      {drinkAlternate}
                    </p>
                  ))}
                <div>
                  {this.ingredientesComQuantidades()}
                </div>
                <p data-testid="instructions">
                  Instruções:
                  {results.meals[0].strInstructions}
                </p>
                <button data-testid="start-recipe-btn" type="button">
                  Iniciar Receita
                </button>
              </>
            )
            : (
              <>
                <img
                  data-testid="recipe-photo"
                  src={ results.drinks[0].strDrinkThumb }
                  alt="img"
                  width="70px"
                />
                <h1 data-testid="recipe-title">{ results.drinks[0].strDrink }</h1>
                <p data-testid="recipe-category">
                  { results.drinks[0].strCategory }
                </p>
              </>
            )
        }

        <p
          data-testid="ingredient-name-and-measure"
        >
          Ingredientes:
        </p>

      </div>
    );
  }

  render() {
    const { results } = this.state;
    if (results === '') return null;
    return (
      <>
        {this.renderMeal()}
      </>
    );
  }
}

Item.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
