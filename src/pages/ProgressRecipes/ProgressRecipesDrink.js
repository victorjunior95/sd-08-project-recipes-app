import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import favIconEnabled from '../../images/blackHeartIcon.svg';
import {
  getDrinksDetails,
} from '../../services';
import filterFood from '../../utils/filterDetailsRecipes';
import '../../styles/pages/Container.css';

const INITIAL_STATE_RECIPE_DRINK = {
  idDrink: '',
  ingredients: [],
  measures: [],
  strArea: '',
  strCategory: '',
  strInstructions: '',
  strDrink: '',
  strDrinkThumb: '',
  strTags: '',
  usedIngredients: [],
};

class ProgressRecipesDrink extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE_RECIPE_DRINK;

    this.handleRequestDrink = this.handleRequestDrink.bind(this);
    this.handleIndredients = this.handleIndredients.bind(this);

    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }

  componentDidMount() {
    this.handleRequestDrink();
  }

  handleLocalStorage() {
    const { usedIngredients, idDrink } = this.state;
    console.log(idDrink, usedIngredients);
  }

  handleIndredients(target, newValue) {
    const { usedIngredients } = this.state;
    if (target.checked) {
      this.setState((state) => ({
        ...state, usedIngredients: [...state.usedIngredients, newValue],
      }),
      this.handleLocalStorage);
    } else {
      const filterCocktails = usedIngredients.filter(
        (ingredient) => ingredient !== newValue,
      );
      this.setState((state) => ({
        ...state, usedIngredients: [...filterCocktails],
      }),
      this.handleLocalStorage);
    }
  }

  handleRequestDrink() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    getDrinksDetails(id).then((response) => {
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
      strCategory,
      strInstructions,
      ingredients,
      measures,
    } = this.state;

    return (
      <div className="recipe-details">
        <img
          style={ { width: '20%' } }
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
          {strCategory}
        </span>
        <div className="box-content">
          <h2>Ingredients</h2>
          <div>
            {ingredients.map((ingredient, index) => (
              <label
              /*                 className={ checkedIngredientsLS('meal', idMeal)
                  .includes(ingredient)
                  ? 'textUnderline'
                  : '' } */
                key={ ingredient }
                htmlFor={ `${ingredient}-id` }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  onChange={ ({ target }) => this.handleIndredients(target, ingredient) }
                  id={ `${ingredient}-id` }
                  type="checkbox"
                  // checked={ checkedIngredientsLS('cocktails', idDrink)
                  // .includes(ingredient) }
                />
                {`${ingredient} - ${measures[index]}`}
              </label>
            ))}
          </div>
        </div>
        <div className="box-content">
          <h2>Instructions</h2>
          <p data-testid="instructions">{strInstructions}</p>
        </div>

        <div className="start-btn">
          <Link
            data-testid="finish-recipe-btn"
            className="start-recipe-btn"
            exact
            to={ `/comidas/${idDrink}/in-progress` }
          >
            Finalizar receita
          </Link>
        </div>
      </div>
    );
  }
}

ProgressRecipesDrink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProgressRecipesDrink;
