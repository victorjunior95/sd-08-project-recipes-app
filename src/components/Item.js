import React, { Component } from 'react';
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

  async fetchRecipe() {
    const { location: { pathname } } = this.props;
    const id = pathname.split('/')[2];
    const type = pathname.split('/')[1];
    if (type === 'comidas') {
      const req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const results = await req.json();
      this.setState({ results });
      console.log(results.meals);
    }
    if (type === 'bebidas') {
      const req = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const results = await req.json();
      this.setState({ results });
      console.log(results.drinks);
    }
  }

  renderMeal() {
    const { location: { pathname } } = this.props;
    const index = 0;
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
                <h1 data-testid="recipe-title">{ results.meals[0].strMeal }</h1>
                <p data-testid="recipe-category">
                  { results.meals[0].strCategory }
                </p>
              </>
            )
            : (
              <>
                <img
                  data-testid="recipe-photo"
                  src={ results.meals[0].strMealThumb }
                  alt="img"
                  width="70px"
                />
                <h1 data-testid="recipe-title">{ results.meals[0].strMeal }</h1>
                <p data-testid="recipe-category">
                  { results.meals[0].strCategory }
                </p>
              </>
            )
        }
        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="share icon" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ whiteHeartIcon } alt="favorite" />
        </button>
        <p
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          ingredientes:
        </p>
        <p data-testid="instructions">instruçoes</p>
        <iframe
          title="teste"
          data-testid="video"
          src=""
        />
        <p data-testid={ `${index}-recomendation-card` }>recomendaçoes</p>
        <button data-testid="start-recipe-btn" type="button">Iniciar Receita</button>
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
