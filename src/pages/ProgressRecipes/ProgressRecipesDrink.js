import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import favIconEnabled from '../../images/blackHeartIcon.svg';
import { /* loadFromLS */ saveToLS } from '../../services';

import '../../styles/pages/Container.css';

class ProgressRecipesDrink extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('inProgressRecipe'));
    this.handleChange = this.handleChange.bind(this);
    this.checkExistIngredientArrRecipes = this.checkExistIngredientArrRecipes.bind(this);
  }

  handleChange(ingredient) {
    const { recipe: { idDrink } } = this.props;
    const { cocktails } = this.state;

    if (!cocktails[idDrink]) {
      const newRecipe = { [idDrink]: [ingredient] };
      this.setState((state) => ({
        ...state, cocktails: { ...state.cocktails, ...newRecipe },
      }
      ));
    } else {
      this.setState((state) => ({
        ...state,
        cocktails: { ...this.checkExistIngredientArrRecipes(
          idDrink,
          ingredient,
          cocktails,
          state,
        ) },
      }));
    }
  }

  setRecipeLocalStorage() {
    const { meals, cocktails } = this.state;
    saveToLS('inProgressRecipe', { meals, cocktails });
  }

  checkExistIngredientArrRecipes(idDrink, ingredient, cocktails, state) {
    let dataSetState = cocktails[idDrink];
    const checkExist = dataSetState.some((element) => element === ingredient);

    if (!checkExist) {
      dataSetState = { [idDrink]: [...dataSetState, ingredient] };
    } else {
      dataSetState = { [idDrink]: dataSetState
        .filter((element) => element !== ingredient) };
    }
    return { ...state.cocktails, ...dataSetState };
  }

  render() {
    this.setRecipeLocalStorage();

    const { recipe } = this.props;

    const {
      idDrink,
      strDrinkThumb,
      strDrink,
      strCategory,
      strInstructions,
      ingredients,
      measures,
    } = recipe;

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
                key={ ingredient }
                htmlFor={ `${ingredient}-id` }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  id={ `${ingredient}-id` }
                  onChange={ () => this.handleChange(ingredient) }
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
  recipe: PropTypes.string.isRequired,
  idDrink: PropTypes.number.isRequired,
};
const mapStateToProps = ({ detailsReducers }) => ({
  recipe: detailsReducers.recipe,
});

export default connect(mapStateToProps)(ProgressRecipesDrink);
