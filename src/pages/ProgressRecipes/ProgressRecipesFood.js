import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import favIconEnabled from '../../images/blackHeartIcon.svg';

import '../../styles/pages/Container.css';

class ProgressRecipesMeal extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('inProgressRecipe'));
    this.checkLS = this.checkLS.bind(this);
  }

  checkLS(ingredient) {
    const { recipe: { idMeal } } = this.props;
    console.log(idMeal);
    this.setState((state) => ({
      ...state,
      meals: {
        ...state.meals,
        [idMeal]: [state.meals[idMeal], ingredient] },
    }));
  }

  render() {
    const { recipe } = this.props;
    const {
      idMeal,
      strMealThumb,
      strMeal,
      strCategory,
      strInstructions,
      ingredients,
      measures,
    } = recipe;

    return (
      <div className="recipe-details">
        <img
          style={ { width: '20%' } }
          src={ strMealThumb }
          alt="Meal Thumbnail"
          data-testid="recipe-photo"
          className="recipe-photo"
        />
        <div className="recipe-header box-content">
          <h1 data-testid="recipe-title" className="recipe-title">
            {strMeal}
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
                  id={ `${ingredient}-id` }
                  type="checkbox"
                  onChange={ () => this.checkLS(ingredient) }
                  /*                   checked={ checkedIngredientsLS('meal', idMeal)
                    .includes(ingredient) } */
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
            to={ `/comidas/${idMeal}/in-progress` }
          >
            Finalizar receita
          </Link>
        </div>
      </div>
    );
  }
}
ProgressRecipesMeal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  recipe: PropTypes.string.isRequired,
  idMeal: PropTypes.number.isRequired,
};

const mapStateToProps = ({ detailsReducers }) => ({
  recipe: detailsReducers.recipe,
});

export default connect(mapStateToProps)(ProgressRecipesMeal);
