import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import favIconEnabled from '../../images/blackHeartIcon.svg';
// import favIconDisabled from '../../images/whiteHeartIcon.svg';
import filterFood from '../../utils/filterDetailsRecipes';
import { fetchDrinkDetails } from '../../services';

const INITIAL_STATE_RECIPE_FOOD = {
  idDrink: '',
  ingredients: [],
  measures: [],
  strArea: '',
  strCategory: '',
  strInstructions: '',
  strDrink: '',
  strDrinkThumb: '',
  strTags: '',
  strYoutube: '',
};

class RecipeFood extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE_RECIPE_FOOD;

    this.handleRequestDrink = this.handleRequestDrink.bind(this);
  }

  componentDidMount() {
    this.handleRequestDrink();
  }

  handleRequestDrink() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetchDrinkDetails(id).then((response) => {
      const drink = filterFood(response, 'drinks');
      this.setState((state) => ({
        ...state,
        ...drink,
      }));
    });
  }

  render() {
    const {
      idDrink,
      strDrinkThumb,
      strDrink,
      strInstructions,
      strYoutube,
      ingredients,
      measures,
      strAlcoholic,
    } = this.state;

    return (
      <div className="recipe-details">
        <img
          style={ { width: '50%' } }
          src={ strDrinkThumb }
          alt="Drink Thumbnail"
          data-testid="recipe-photo"
          className="recipe-photo"
        />
        <div className="recipe-header box-content">
          <h1 data-testid="recipe-title" className="recipe-title">
            {strDrink}
          </h1>
          <div className="actions">
            <button
              type="button"
              data-testid="share-btn"
              className="action-button"
            >
              <img src={ shareIcon } alt="share" />
            </button>
            <p id="link" style={ { display: 'none' } }>
              Link copiado!
            </p>
            <button type="button" className="action-button">
              <img
                src={ favIconEnabled }
                alt="favorite"
                data-testid="favorite-btn"
                className="favorite-icon"
              />
            </button>
          </div>
        </div>
        <span data-testid="recipe-category" className="recipe-category">
          {strAlcoholic}
        </span>
        <div className="box-content">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li
                key={ ingredient }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${ingredient} - ${measures[index]}`}
              </li>
            ))}
          </ul>
        </div>
        <div className="box-content">
          <h2>Instructions</h2>
          <p data-testid="instructions">{strInstructions}</p>
        </div>
        <div className="video-content">
          <h2 className="box-content">Video</h2>
          <iframe
            data-testid="video"
            title={ strDrink }
            width="360"
            height="202.5"
            src={ `https://www.youtube.com/embed/${strYoutube.split('/')[3]}` }
            frameBorder="0"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;
            gyroscope;picture-in-picture"
            allowFullScreen
          />
        </div>
        <h2 className="box-content">Recomendadas</h2>
        <div className="carousel">

          <Link
            to={ `/bebidas/${'_'}` }
            className="carousel-content"
            data-testid={ `${0}-recomendation-card` }
          >
            <img
              src="img.png"
              alt="titulo"
              className="carousel-item-image"
            />
          </Link>

        </div>
        <div className="start-btn">
          <Link
            data-testid="start-recipe-btn"
            className="start-recipe-btn"
            to={ `/bebidas/${idDrink}/in-progress` }
          >
            Iniciar receita
          </Link>
        </div>
      </div>
    );
  }
}

RecipeFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeFood;
