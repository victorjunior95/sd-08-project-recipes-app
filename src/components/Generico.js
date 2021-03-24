import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import { fetchDrinkApiById, fetchFoodApiById,
  fetchDrinkRecomendation, fetchFoodRecomendation } from '../helpers';
import RecomendationCard from './RecomendationCard';
import './generico.css';

class Generico extends Component {
  constructor() {
    super();
    this.state = {
      changeRecipe: true,
      currentRecipe: '',
      currentVideo: '',
      ingredientList: {},
      recomendations: [],
      carouselIndex: 0,
    };
    this.fetchFoodRecipe = this.fetchFoodRecipe.bind(this);
    this.setNewRecipe = this.setNewRecipe.bind(this);
    this.handleCarousel = this.handleCarousel.bind(this);
  }

  handleCarousel(selectedIndex) {
    this.setState({ carouselIndex: selectedIndex });
  }

  setNewRecipe() {
    this.setState({ changeRecipe: true });
  }

  getIngredientList(recipe) {
    return Object.keys(recipe).reduce((acc, currentKey) => {
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
  }

  async fetchFoodRecipe(foodId) {
    const recipe = await fetchFoodApiById(foodId);
    const ingredients = this.getIngredientList(recipe);
    const recomendation = await fetchDrinkRecomendation();
    const youtubeVideo = recipe.strYoutube.replace('watch?v=', 'embed/');
    this.setState({
      ingredientList: ingredients,
      recomendations: recomendation,
      currentVideo: youtubeVideo,
      changeRecipe: false,
      currentRecipe: recipe,
    });
  }

  async fetchDrinkRecipe(foodId) {
    const recipe = await fetchDrinkApiById(foodId);
    const ingredients = this.getIngredientList(recipe);
    const recomendation = await fetchFoodRecomendation();
    const youtubeVideo = recipe && recipe.strYoutube
    && recipe.strYoutube.replace('watch?v=', 'embed/');
    this.setState({
      ingredientList: ingredients,
      recomendations: recomendation,
      currentVideo: youtubeVideo,
      changeRecipe: false,
      currentRecipe: recipe,
    });
  }

  render() {
    const { currentRecipe, currentVideo, carouselIndex,
      ingredientList, recomendations, changeRecipe } = this.state;
    const { match: { params: { id } } } = this.props;
    if (changeRecipe) {
      if (window.location.href.includes('bebidas')) {
        this.fetchDrinkRecipe(id);
      } else {
        this.fetchFoodRecipe(id);
      }
      return <div>Loading...</div>;
    }
    return (
      <div>
        <img
          src={ currentRecipe.strDrinkThumb || currentRecipe.strMealThumb }
          alt=""
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">
          {currentRecipe.strDrink || currentRecipe.strMeal}
        </h1>
        {currentRecipe.strDrink && <h2>{}</h2>}
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favorito</button>
        <span data-testid="recipe-category">
          {currentRecipe.strAlcoholic || currentRecipe.strCategory}
        </span>
        <h2>Ingredientes</h2>
        {ingredientList
        && Object.keys(ingredientList).map((e, i) => (
          <ul key={ i }>
            <li data-testid={ `${i}-ingredient-name-and-measure` }>
              {`${ingredientList[e].item} - ${ingredientList[e].quantity}` }
            </li>
          </ul>
        ))}
        <div data-testid="instructions">{currentRecipe.strInstructions}</div>
        {window.location.href.includes('comidas') && <iframe
          width="683"
          height="384"
          title="video"
          src={ currentVideo }
          data-testid="video"
        />}
        <Carousel activeIndex={ carouselIndex } onSelect={ this.handleCarousel }>
          {recomendations && recomendations.map((recomendation, i) => (
            <Carousel.Item key={ i }>
              <RecomendationCard
                recomendation={ recomendation }
                index={ i }
                setNewRecipe={ this.setNewRecipe }
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <button
          className="start-recipe"
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar receita

        </button>
      </div>
    );
  }
}

Generico.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default Generico;
