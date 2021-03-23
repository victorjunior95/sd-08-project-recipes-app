/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Generico extends Component {
  constructor() {
    super();
    this.state = {
      currentVideo: '',
      ingredientList: {},
    };
    this.video = this.video.bind(this);
    this.generateIngredientList = this.generateIngredientList.bind(this);
  }

  componentDidMount() {
    this.fetchRecipe();
  }

  async fetchRecipe() {
    const { match: { params: { foodId } } } = this.props;
    const recipe = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
      .then((response) => response.json()).then((e) => e.meals[0]);
    this.generateIngredientList(recipe);
    this.video(recipe);
  }

  generateIngredientList(recipe) {
    const listItems = Object.keys(recipe).reduce((acc, currentKey) => {
      if (recipe[currentKey] && currentKey.includes('strIngredient')) {
        const measure = currentKey.replace('strIngredient', 'strMeasure');
        return { ...acc,
          [currentKey]: {
            item: recipe[currentKey],
            quantity: recipe[measure],
          } };
      }
      return acc;
    },
    {});
    this.setState({ ingredientList: listItems });
  }

  video(recipe) {
    if (recipe && recipe.strYoutube) {
      const youtubeVideo = recipe.strYoutube.replace('watch?v=', 'embed/');
      this.setState({ currentVideo: youtubeVideo });
    }
  }

  render() {
    const { currentVideo, ingredientList } = this.state;
    return (
      <div>
        <h1>Generico</h1>
        <img src="" alt="" data-testid="recipe-photo" />
        <h1 data-testid="recipe-title">Img title</h1>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favorito</button>
        <span data-testid="recipe-category">Categoria</span>
        <h2>Ingredientes</h2>
        {ingredientList && Object.keys(ingredientList).map((e, i) => (
          <ul key={ i }>
            <li data-testid={ `${i}-ingredient-name-and-measure` }>
              {`${ingredientList[e].item} - ${ingredientList[e].quantity}` }
            </li>
          </ul>
        ))}
        <h2>Instruções</h2>
        <span data-testid="instructions">texto de instrução</span>
        <iframe
          width="683"
          height="384"
          title="video"
          src={ currentVideo }
          data-testid="video"
        />
        <ul>
          <li data-testid="${index}-recomendation-card">Item1</li>
        </ul>
        <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
      </div>
    );
  }
}

Generico.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default Generico;
